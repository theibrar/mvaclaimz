import { NextRequest, NextResponse } from 'next/server';
import { MVALeadPayload } from '@/lib/types';
import fs from 'fs';
import path from 'path';

const OPTIMAX_API_URL = 'https://leads.optimax-ai.com/api/market/v1/ll/lead';
const OPTIMAX_API_KEY = 'prism_ll_32bc31d8f6c77fa427d1abdb1d4b23f38749f26e7ed636d5';

export async function POST(request: NextRequest) {
  try {
    const body: MVALeadPayload = await request.json();

    // 1. Resolve client IP from request headers or body
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    let clientIp = body.ip_address || '';
    if (forwarded) {
      clientIp = forwarded.split(',')[0].trim();
    } else if (realIp) {
      clientIp = realIp.trim();
    }
    if (!clientIp || clientIp === '::1' || clientIp === '127.0.0.1') {
      clientIp = body.ip_address || '127.0.0.1';
    }

    // 2. Resolve User Agent
    const userAgent = request.headers.get('user-agent') || body.user_agent || '';

    // 3. Resolve Submission Timestamp (ISO)
    const now = new Date().toISOString();
    const submittedAt = body.submitted_at || now;

    // 4. Resolve Page URL
    const pageUrl = body.page_url || request.headers.get('referer') || 'https://mvaclaimz.com/';

    // 5. Format Phone Number (+1XXXXXXXXXX)
    const rawDigits = (body.phone || '').replace(/\D/g, '');
    const cleanDigits = rawDigits.startsWith('1') && rawDigits.length === 11 ? rawDigits.slice(1) : rawDigits;
    const formattedPhone = cleanDigits.length === 10 ? `+1${cleanDigits}` : body.phone || '';

    // 6. Build the exact 28 answers according to conditional logic
    // If a question was not shown because condition wasn't met, send ""
    const rawAnswers = body.answers || {} as any;

    const notAtFault = rawAnswers.not_at_fault || 'yes';
    const injured = rawAnswers.injured || 'yes';
    const role = rawAnswers.role || 'driver';
    const anotherVehicle = rawAnswers.another_vehicle || 'yes';
    const insured = rawAnswers.insured || 'yes';
    const representation = rawAnswers.representation || 'no';
    const adult = rawAnswers.adult || 'yes';
    const state = rawAnswers.state || 'TX';

    const answersPayload = {
      not_at_fault: notAtFault,
      injured: injured,
      when: rawAnswers.when || 'under_3mo',
      role: role,
      passenger_fault: role === 'passenger' ? (rawAnswers.passenger_fault || '') : '',
      fault: notAtFault === 'no' ? (rawAnswers.fault || '') : '',
      claimant_fault: rawAnswers.claimant_fault || 'no',
      insured: insured,
      um: insured === 'no' ? (rawAnswers.um || '') : '',
      household_um: (insured === 'no' && rawAnswers.um === 'no') ? (rawAnswers.household_um || '') : '',
      another_vehicle: anotherVehicle,
      visible_damage: rawAnswers.visible_damage || 'yes',
      police: rawAnswers.police || 'yes',
      liability_accepted: anotherVehicle === 'yes' ? (rawAnswers.liability_accepted || '') : '',
      treatment_timing: injured === 'yes' ? (rawAnswers.treatment_timing || '') : '',
      treatment_status: injured === 'yes' ? (rawAnswers.treatment_status || '') : '',
      representation: representation,
      retained: representation === 'no' ? (rawAnswers.retained || '') : '',
      rejected: representation === 'no' ? (rawAnswers.rejected || '') : '',
      attorney_dropped: representation === 'no' ? (rawAnswers.attorney_dropped || '') : '',
      settled: rawAnswers.settled || 'no',
      adult: adult,
      guardian: adult === 'no' ? (rawAnswers.guardian || '') : '',
      working: rawAnswers.working || 'no',
      government_vehicle: rawAnswers.government_vehicle || 'no',
      state: state,
      ca_insured: state === 'CA' ? (rawAnswers.ca_insured || '') : '',
      residence_state: rawAnswers.residence_state || state || 'TX',
    };

    // 7. Construct EXACT payload matching Optimax API specification
    const optimaxPayload = {
      first_name: (body.first_name || '').trim(),
      last_name: (body.last_name || '').trim(),
      phone: formattedPhone,
      email: (body.email || '').trim(),
      zip: (body.zip || '').trim().slice(0, 5),
      answers: answersPayload,
      trustedform_cert_url: body.trustedform_cert_url || '',
      universal_leadid: body.universal_leadid || '',
      consent_text: body.consent_text || '',
      page_url: pageUrl,
      ip_address: clientIp,
      user_agent: userAgent,
      submitted_at: submittedAt,
    };

    console.log('[OPTIMAX OUTBOUND PAYLOAD]', JSON.stringify(optimaxPayload, null, 2));

    // 8. POST the moment they click to https://leads.optimax-ai.com/api/market/v1/ll/lead
    let optimaxResponseData: any = null;
    let optimaxStatus = 0;

    try {
      const apiResponse = await fetch(OPTIMAX_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': OPTIMAX_API_KEY,
        },
        body: JSON.stringify(optimaxPayload),
      });

      optimaxStatus = apiResponse.status;
      const responseText = await apiResponse.text();

      try {
        optimaxResponseData = JSON.parse(responseText);
      } catch {
        optimaxResponseData = { raw: responseText };
      }

      console.log(`[OPTIMAX API RESPONSE ${optimaxStatus}]`, optimaxResponseData);
    } catch (fetchErr: any) {
      console.error('[OPTIMAX API FETCH ERROR]', fetchErr);
      optimaxResponseData = { error: fetchErr.message || 'Network fetch error' };
    }

    const leadId = optimaxResponseData?.lead_id || 'MVA-' + Date.now().toString(36).toUpperCase();

    // 9. Persist lead and API response to local file log
    try {
      const logDir = path.join(process.cwd(), 'logs');
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      fs.appendFileSync(
        path.join(logDir, 'leads.jsonl'),
        JSON.stringify({
          lead_id: leadId,
          optimax_status: optimaxStatus,
          optimax_response: optimaxResponseData,
          payload: optimaxPayload,
          timestamp: now,
        }) + '\n'
      );
    } catch (logErr) {
      console.error('Failed to append lead to file log:', logErr);
    }

    // 10. Return 200 with lead_id to client
    if (optimaxStatus === 200 || optimaxResponseData?.ok) {
      return NextResponse.json({
        success: true,
        lead_id: leadId,
        status: optimaxResponseData?.status || 'received',
        message: 'Lead delivered successfully to Optimax AI',
        data: optimaxResponseData,
      });
    } else {
      // Even if Optimax API returns a non-200 validation, return response with lead_id so consumer is not blocked
      return NextResponse.json({
        success: false,
        lead_id: leadId,
        status: optimaxResponseData?.status || 'error',
        optimax_status: optimaxStatus,
        message: optimaxResponseData?.reason || 'Optimax API processed submission',
        data: optimaxResponseData,
      }, { status: optimaxStatus >= 400 && optimaxStatus < 600 ? optimaxStatus : 200 });
    }
  } catch (error: any) {
    console.error('Lead submission handler error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

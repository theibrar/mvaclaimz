const http = require('http');

http.get('http://localhost:1057/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('=== HTML AUDIT RESULTS ===');
    
    // 1. Jornaya
    const hasJornaya = data.includes('LeadiDscript') && data.includes('5d1e7497-2645-4e5b-0b83-cf1eed6467c8');
    console.log('1. Jornaya Script:', hasJornaya ? 'PASSED' : 'FAILED');

    // 2. TrustedForm
    const hasTrustedForm = data.includes('trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true');
    console.log('2. TrustedForm Script:', hasTrustedForm ? 'PASSED' : 'FAILED');

    // 3. Hidden Fields
    const hiddenFields = [
      'leadid_token',
      'xxTrustedFormCertUrl',
      'xxTrustedFormPingUrl',
      'ip_address',
      'user_agent',
      'landing_page_url',
      'leadid_tcpa_disclosure'
    ];
    const missingHidden = hiddenFields.filter(f => !data.includes(`id="${f}"`));
    console.log('3. Hidden Fields:', missingHidden.length === 0 ? 'ALL PASSED' : 'MISSING: ' + missingHidden.join(', '));

    // 4. Exact Consent Text
    const hasConsent = data.includes('By clicking &quot;Check my claim&quot;, I give my prior express written consent for Settlement Scout');
    console.log('4. Exact Consent Text:', hasConsent ? 'PASSED' : 'FAILED');

    // 5. Submit Button
    const hasSubmitBtn = data.includes('id="submit_btn"') && data.includes('Check my claim');
    console.log('5. Submit Button:', hasSubmitBtn ? 'PASSED' : 'FAILED');

    // 6. Mandatory Footer Line
    const footerText = 'Settlement Scout is a legal advertising service operated by OPTIMAX AI LTD. It is not a law firm and does not provide legal advice. Consultation does not create an attorney-client relationship. Results vary; past results do not predict future outcomes.';
    const hasFooter = data.includes(footerText);
    console.log('6. Mandatory Footer Line:', hasFooter ? 'PASSED' : 'FAILED');

    // 7. Logos
    const hasLogo = data.includes('/img/logo.svg') && data.includes('/img/logo-white.svg');
    console.log('7. Proper Logos (/img/logo.svg & /img/logo-white.svg):', hasLogo ? 'PASSED' : 'FAILED');

    // 8. Form Fields
    const fields = [
      'not_at_fault', 'injured', 'when', 'role', 'passenger_fault', 'fault',
      'claimant_fault', 'insured', 'um', 'household_um', 'another_vehicle',
      'visible_damage', 'police', 'liability_accepted', 'treatment_timing',
      'treatment_status', 'representation', 'retained', 'rejected',
      'attorney_dropped', 'settled', 'adult', 'guardian', 'working',
      'government_vehicle', 'state', 'ca_insured', 'residence_state',
      'first_name', 'last_name', 'phone', 'email', 'zip'
    ];
    const missingFields = fields.filter(f => !data.includes(`id="${f}"`));
    console.log('8. All 33 Form & Contact Fields:', missingFields.length === 0 ? 'ALL PASSED' : 'MISSING: ' + missingFields.join(', '));

    // 9. Next and Prev button IDs
    const navButtons = [
      'next-step-1', 'next-step-2', 'next-step-3', 'next-step-4',
      'prev-step-2', 'prev-step-3', 'prev-step-4', 'prev-step-5'
    ];
    const missingNav = navButtons.filter(b => !data.includes(`id="${b}"`));
    console.log('9. Navigation Buttons (next/prev IDs):', missingNav.length === 0 ? 'ALL PASSED' : 'MISSING: ' + missingNav.join(', '));
  });
}).on('error', err => console.error(err));

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TrackingScripts from './TrackingScripts';
import { US_STATES } from '@/lib/states';
import { MVALeadPayload } from '@/lib/types';

const CONSENT_TEXT = `By clicking "Check my claim", I give my prior express written consent for Settlement Scout (operated by OPTIMAX AI LTD), Legal Leadz LLC and HQ Intake.com, LLC to call and text me about my accident claim at the number I provided, including a call from OPTIMAX AI LTD before I am transferred, and including calls and texts made using automated technology and artificial or prerecorded voice. Consent is not a condition of any purchase or service. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. You agree to our Privacy Policy and Terms of Use.`;

export default function MultiStepForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  // Active step (1 to 5)
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Answers object initialized with user defaults
  const [answers, setAnswers] = useState({
    not_at_fault: 'yes',
    injured: 'yes',
    when: 'under_3mo',
    role: 'driver',
    passenger_fault: '',
    fault: '',
    claimant_fault: 'no',
    insured: 'yes',
    um: '',
    household_um: '',
    another_vehicle: 'yes',
    visible_damage: 'yes',
    police: 'yes',
    liability_accepted: '',
    treatment_timing: 'within_14',
    treatment_status: 'ongoing',
    representation: 'no',
    retained: 'no',
    rejected: 'no',
    attorney_dropped: 'no',
    settled: 'no',
    adult: 'yes',
    guardian: '',
    working: 'no',
    government_vehicle: 'no',
    state: 'TX',
    ca_insured: '',
    residence_state: 'TX',
  });

  // Contact info
  const [contact, setContact] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    zip: '',
  });

  const [ipAddress, setIpAddress] = useState('');
  const [userAgent, setUserAgent] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Capture client metadata
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserAgent(navigator.userAgent || '');
      setPageUrl(window.location.href);

      // Fetch IP from local route or ipify fallback
      fetch('/api/ip')
        .then((res) => res.json())
        .then((data) => {
          if (data?.ip) setIpAddress(data.ip);
        })
        .catch(() => {
          fetch('https://api.ipify.org?format=json')
            .then((r) => r.json())
            .then((d) => {
              if (d?.ip) setIpAddress(d.ip);
            })
            .catch(() => setIpAddress('127.0.0.1'));
        });
    }
  }, []);

  // Update answer handler
  const handleAnswerChange = (field: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Format phone number
  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    setContact((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.phone;
        return next;
      });
    }
  };

  // Step validation
  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!answers.when) newErrors.when = 'Please select when the accident occurred';
      if (!answers.role) newErrors.role = 'Please select your role in the accident';
      if (!answers.another_vehicle) newErrors.another_vehicle = 'Please indicate if another vehicle was involved';
      if (!answers.visible_damage) newErrors.visible_damage = 'Please indicate vehicle damage status';
      if (!answers.police) newErrors.police = 'Please indicate if a police report was filed';
      if (!answers.state) newErrors.state = 'Please select the accident state';
      if (answers.state === 'CA' && !answers.ca_insured) {
        newErrors.ca_insured = 'Please answer California insurance question';
      }
    } else if (stepNumber === 2) {
      if (!answers.not_at_fault) newErrors.not_at_fault = 'Please select fault status';
      if (answers.role === 'passenger' && !answers.passenger_fault) {
        newErrors.passenger_fault = 'Please answer if the driver of your vehicle was at fault';
      }
      if (answers.not_at_fault === 'no' && !answers.fault) {
        newErrors.fault = 'Please select who was at fault';
      }
      if (!answers.claimant_fault) newErrors.claimant_fault = 'Please answer claimant fault question';
      if (answers.another_vehicle === 'yes' && !answers.liability_accepted) {
        newErrors.liability_accepted = 'Please select liability acceptance status';
      }
      if (!answers.government_vehicle) newErrors.government_vehicle = 'Please select government vehicle status';
    } else if (stepNumber === 3) {
      if (!answers.injured) newErrors.injured = 'Please indicate if you were injured';
      if (answers.injured === 'yes') {
        if (!answers.treatment_timing) newErrors.treatment_timing = 'Please select when medical care was sought';
        if (!answers.treatment_status) newErrors.treatment_status = 'Please select current treatment status';
      }
      if (!answers.working) newErrors.working = 'Please indicate if you missed work';
    } else if (stepNumber === 4) {
      if (!answers.insured) newErrors.insured = 'Please indicate your auto insurance status';
      if (answers.insured === 'no' && !answers.um) {
        newErrors.um = 'Please answer uninsured motorist coverage question';
      }
      if (answers.insured === 'no' && answers.um === 'no' && !answers.household_um) {
        newErrors.household_um = 'Please answer household insurance question';
      }
      if (!answers.representation) newErrors.representation = 'Please indicate if represented by an attorney';
      if (answers.representation === 'no') {
        if (!answers.retained) newErrors.retained = 'Please indicate retained attorney status';
        if (!answers.rejected) newErrors.rejected = 'Please indicate if rejected by an attorney';
        if (!answers.attorney_dropped) newErrors.attorney_dropped = 'Please indicate if an attorney dropped your case';
        if (!answers.settled) newErrors.settled = 'Please indicate if claim has already settled';
      }
      if (!answers.adult) newErrors.adult = 'Please indicate if you are at least 18 years old';
      if (answers.adult === 'no' && !answers.guardian) {
        newErrors.guardian = 'Please indicate if you have a legal guardian';
      }
      if (!answers.residence_state) newErrors.residence_state = 'Please select your state of residence';
    } else if (stepNumber === 5) {
      if (!contact.first_name.trim() || contact.first_name.trim().length < 2) {
        newErrors.first_name = 'First name must be at least 2 characters';
      }
      if (!contact.last_name.trim() || contact.last_name.trim().length < 2) {
        newErrors.last_name = 'Last name must be at least 2 characters';
      }
      const phoneDigits = contact.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit US phone number';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!contact.email.trim() || !emailRegex.test(contact.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
      const zipRegex = /^\d{5}$/;
      if (!contact.zip.trim() || !zipRegex.test(contact.zip.trim())) {
        newErrors.zip = 'ZIP code must be exactly 5 digits';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Final Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);

    try {
      // Capture live tokens from DOM
      const certUrlInput = document.getElementById('xxTrustedFormCertUrl') as HTMLInputElement | null;
      const leadidTokenInput = document.getElementById('leadid_token') as HTMLInputElement | null;
      const trustedformCertUrl = certUrlInput?.value || '';
      const universalLeadid = leadidTokenInput?.value || '';

      const phoneDigits = contact.phone.replace(/\D/g, '');
      const formattedPhone = phoneDigits.length === 10 ? `+1${phoneDigits}` : `+1${phoneDigits}`;

      const payload: MVALeadPayload = {
        first_name: contact.first_name.trim(),
        last_name: contact.last_name.trim(),
        phone: formattedPhone,
        email: contact.email.trim(),
        zip: contact.zip.trim(),
        answers: {
          not_at_fault: answers.not_at_fault,
          injured: answers.injured,
          when: answers.when,
          role: answers.role,
          passenger_fault: answers.role === 'passenger' ? answers.passenger_fault : '',
          fault: answers.not_at_fault === 'no' ? answers.fault : '',
          claimant_fault: answers.claimant_fault,
          insured: answers.insured,
          um: answers.insured === 'no' ? answers.um : '',
          household_um: (answers.insured === 'no' && answers.um === 'no') ? answers.household_um : '',
          another_vehicle: answers.another_vehicle,
          visible_damage: answers.visible_damage,
          police: answers.police,
          liability_accepted: answers.another_vehicle === 'yes' ? answers.liability_accepted : '',
          treatment_timing: answers.injured === 'yes' ? answers.treatment_timing : '',
          treatment_status: answers.injured === 'yes' ? answers.treatment_status : '',
          representation: answers.representation,
          retained: answers.representation === 'no' ? answers.retained : '',
          rejected: answers.representation === 'no' ? answers.rejected : '',
          attorney_dropped: answers.representation === 'no' ? answers.attorney_dropped : '',
          settled: answers.settled,
          adult: answers.adult,
          guardian: answers.adult === 'no' ? answers.guardian : '',
          working: answers.working,
          government_vehicle: answers.government_vehicle,
          state: answers.state,
          ca_insured: answers.state === 'CA' ? answers.ca_insured : '',
          residence_state: answers.residence_state,
        },
        trustedform_cert_url: trustedformCertUrl,
        universal_leadid: universalLeadid,
        consent_text: CONSENT_TEXT,
        page_url: pageUrl || (typeof window !== 'undefined' ? window.location.href : 'https://mvaclaimz.com'),
        ip_address: ipAddress,
        user_agent: userAgent || (typeof window !== 'undefined' ? navigator.userAgent : ''),
        submitted_at: new Date().toISOString(),
      };

      console.log('Submitting MVA Lead Payload:', payload);

      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('Submission Response:', result);

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('mva_lead_result', JSON.stringify({
          lead_id: result.lead_id || 'MVA-' + Date.now().toString(36).toUpperCase(),
          first_name: payload.first_name,
          phone: payload.phone,
          state: payload.answers.state,
          submitted_at: payload.submitted_at,
        }));
      }

      router.push('/thank-you');
    } catch (err) {
      console.error('Submission failed:', err);
      alert('There was an issue submitting your evaluation. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="form-container">
        {/* Form Title */}
        <h3 className="text-2xl font-black text-[#0C1E36] mb-4 text-center">
          Fast Case Evaluation
        </h3>

        {/* 5-Step Progress Bar matching mvaselect */}
        <div className="form-progress flex justify-between items-center mb-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm relative z-10 transition-all ${
                currentStep === step
                  ? 'bg-[#C7FD0D] text-[#0C1E36] ring-4 ring-[#C7FD0D]/30 border-2 border-[#0C1E36]'
                  : currentStep > step
                  ? 'bg-[#C7FD0D] text-[#0C1E36]'
                  : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}
            >
              {currentStep > step ? (
                <svg className="w-4 h-4 text-[#0C1E36]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step
              )}
            </div>
          ))}
        </div>

        {/* MAIN FORM */}
        <form
          ref={formRef}
          id="mvaForm"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4"
        >
          {/* ============================================================ */}
          {/* MANDATORY HIDDEN FIELDS FOR TRUSTEDFORM & JORNAYA TRACKING   */}
          {/* ============================================================ */}
          <input type="hidden" id="leadid_token" name="universal_leadid" value="" />
          <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" value="" />
          <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" value="" />
          <input type="hidden" id="ip_address" name="ip_address" value={ipAddress} />
          <input type="hidden" id="user_agent" name="user_agent" value={userAgent} />
          <input type="hidden" id="landing_page_url" name="landing_page_url" value={pageUrl} />

          {/* ============================================================ */}
          {/* STEP 1: ACCIDENT BASICS                                      */}
          {/* ============================================================ */}
          <div
            id="step-1"
            className={`form-step space-y-4 ${currentStep === 1 ? 'block' : 'hidden'}`}
          >
            <div className="border-b border-slate-100 pb-2">
              <h5 className="font-extrabold text-base text-[#0C1E36]">
                Step 1: Accident Basics
              </h5>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* when */}
              <div>
                <label htmlFor="when" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Incident Date / Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  id="when"
                  name="when"
                  value={answers.when}
                  onChange={(e) => handleAnswerChange('when', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="under_3mo">Under 3 months ago (Recent)</option>
                  <option value="3_to_6mo">3 to 6 months ago</option>
                  <option value="6_to_12mo">6 to 12 months ago</option>
                  <option value="1_to_2yr">1 to 2 years ago</option>
                  <option value="over_2yr">Over 2 years ago</option>
                </select>
                {errors.when && <p className="text-[11px] text-red-600 mt-0.5">{errors.when}</p>}
              </div>

              {/* role */}
              <div>
                <label htmlFor="role" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Your Role in Crash <span className="text-red-500">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  value={answers.role}
                  onChange={(e) => handleAnswerChange('role', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="driver">Driver of vehicle</option>
                  <option value="passenger">Passenger in vehicle</option>
                  <option value="pedestrian">Pedestrian / Cyclist</option>
                  <option value="other">Other</option>
                </select>
                {errors.role && <p className="text-[11px] text-red-600 mt-0.5">{errors.role}</p>}
              </div>

              {/* another_vehicle */}
              <div>
                <label htmlFor="another_vehicle" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Was another vehicle involved? <span className="text-red-500">*</span>
                </label>
                <select
                  id="another_vehicle"
                  name="another_vehicle"
                  value={answers.another_vehicle}
                  onChange={(e) => handleAnswerChange('another_vehicle', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">Yes, another vehicle involved</option>
                  <option value="no">No, single vehicle incident</option>
                </select>
                {errors.another_vehicle && <p className="text-[11px] text-red-600 mt-0.5">{errors.another_vehicle}</p>}
              </div>

              {/* visible_damage */}
              <div>
                <label htmlFor="visible_damage" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Visible Damage to Vehicles? <span className="text-red-500">*</span>
                </label>
                <select
                  id="visible_damage"
                  name="visible_damage"
                  value={answers.visible_damage}
                  onChange={(e) => handleAnswerChange('visible_damage', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">Yes, moderate to severe damage</option>
                  <option value="minor">Minor scratches / dents</option>
                  <option value="no">No visible damage</option>
                </select>
                {errors.visible_damage && <p className="text-[11px] text-red-600 mt-0.5">{errors.visible_damage}</p>}
              </div>

              {/* police */}
              <div>
                <label htmlFor="police" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Official Police Report Filed? <span className="text-red-500">*</span>
                </label>
                <select
                  id="police"
                  name="police"
                  value={answers.police}
                  onChange={(e) => handleAnswerChange('police', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">Yes, police arrived & filed report</option>
                  <option value="no">No police report filed</option>
                </select>
                {errors.police && <p className="text-[11px] text-red-600 mt-0.5">{errors.police}</p>}
              </div>

              {/* state */}
              <div>
                <label htmlFor="state" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Accident State <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={answers.state}
                  onChange={(e) => handleAnswerChange('state', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  {US_STATES.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label} ({st.value})
                    </option>
                  ))}
                </select>
                {errors.state && <p className="text-[11px] text-red-600 mt-0.5">{errors.state}</p>}
              </div>

              {/* ca_insured (Conditional: shown ONLY if state === 'CA') */}
              <div
                style={{ display: answers.state === 'CA' ? 'block' : 'none' }}
                className="sm:col-span-2 bg-slate-50 p-3 rounded-xl border border-slate-200"
              >
                <label htmlFor="ca_insured" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  California Requirement: Were you insured in CA at time of accident? <span className="text-red-500">*</span>
                </label>
                <select
                  id="ca_insured"
                  name="ca_insured"
                  value={answers.ca_insured}
                  onChange={(e) => handleAnswerChange('ca_insured', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select California insurance status</option>
                  <option value="yes">Yes, I had active insurance</option>
                  <option value="no">No active insurance</option>
                </select>
                {errors.ca_insured && <p className="text-[11px] text-red-600 mt-0.5">{errors.ca_insured}</p>}
              </div>
            </div>

            {/* Step 1 Actions */}
            <div className="flex justify-end pt-3 border-t border-slate-100">
              <button
                type="button"
                id="next-step-1"
                onClick={handleNext}
                className="btn-primary-mva next-step inline-flex items-center gap-2 bg-[#C7FD0D] hover:bg-[#AEDB0A] text-[#0C1E36] font-extrabold py-3 px-8 rounded-full shadow-neon transition"
              >
                <span>Next</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 2: FAULT & LIABILITY                                    */}
          {/* ============================================================ */}
          <div
            id="step-2"
            className={`form-step space-y-4 ${currentStep === 2 ? 'block' : 'hidden'}`}
          >
            <div className="border-b border-slate-100 pb-2">
              <h5 className="font-extrabold text-base text-[#0C1E36]">
                Step 2: Fault &amp; Liability
              </h5>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* not_at_fault */}
              <div>
                <label htmlFor="not_at_fault" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Were you at fault? <span className="text-red-500">*</span>
                </label>
                <select
                  id="not_at_fault"
                  name="not_at_fault"
                  value={answers.not_at_fault}
                  onChange={(e) => handleAnswerChange('not_at_fault', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">No, I was NOT at fault</option>
                  <option value="no">Yes, or partially at fault</option>
                </select>
                {errors.not_at_fault && <p className="text-[11px] text-red-600 mt-0.5">{errors.not_at_fault}</p>}
              </div>

              {/* passenger_fault (Conditional: shown ONLY if role === 'passenger') */}
              <div style={{ display: answers.role === 'passenger' ? 'block' : 'none' }}>
                <label htmlFor="passenger_fault" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Was driver of your car at fault? <span className="text-red-500">*</span>
                </label>
                <select
                  id="passenger_fault"
                  name="passenger_fault"
                  value={answers.passenger_fault}
                  onChange={(e) => handleAnswerChange('passenger_fault', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select</option>
                  <option value="no">No, the other vehicle was at fault</option>
                  <option value="yes">Yes, the driver of our vehicle</option>
                  <option value="unknown">Under investigation</option>
                </select>
                {errors.passenger_fault && <p className="text-[11px] text-red-600 mt-0.5">{errors.passenger_fault}</p>}
              </div>

              {/* fault (Conditional: shown ONLY if not_at_fault === 'no') */}
              <div style={{ display: answers.not_at_fault === 'no' ? 'block' : 'none' }}>
                <label htmlFor="fault" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Specific Fault Attribution <span className="text-red-500">*</span>
                </label>
                <select
                  id="fault"
                  name="fault"
                  value={answers.fault}
                  onChange={(e) => handleAnswerChange('fault', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select attribution</option>
                  <option value="partial">Partial / shared fault</option>
                  <option value="disputed">Disputed by other driver</option>
                  <option value="other_driver">Other driver primarily</option>
                  <option value="me">Primarily my fault</option>
                </select>
                {errors.fault && <p className="text-[11px] text-red-600 mt-0.5">{errors.fault}</p>}
              </div>

              {/* claimant_fault */}
              <div>
                <label htmlFor="claimant_fault" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Did police cite you at scene? <span className="text-red-500">*</span>
                </label>
                <select
                  id="claimant_fault"
                  name="claimant_fault"
                  value={answers.claimant_fault}
                  onChange={(e) => handleAnswerChange('claimant_fault', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No, I was not cited</option>
                  <option value="yes">Yes, I was ticketed / cited</option>
                </select>
                {errors.claimant_fault && <p className="text-[11px] text-red-600 mt-0.5">{errors.claimant_fault}</p>}
              </div>

              {/* liability_accepted (Conditional: shown ONLY if another_vehicle === 'yes') */}
              <div style={{ display: answers.another_vehicle === 'yes' ? 'block' : 'none' }}>
                <label htmlFor="liability_accepted" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Has other insurer accepted liability? <span className="text-red-500">*</span>
                </label>
                <select
                  id="liability_accepted"
                  name="liability_accepted"
                  value={answers.liability_accepted}
                  onChange={(e) => handleAnswerChange('liability_accepted', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select status</option>
                  <option value="pending">Pending investigation / Not yet</option>
                  <option value="yes">Yes, they admitted liability</option>
                  <option value="denied">No, they denied liability</option>
                </select>
                {errors.liability_accepted && <p className="text-[11px] text-red-600 mt-0.5">{errors.liability_accepted}</p>}
              </div>

              {/* government_vehicle */}
              <div>
                <label htmlFor="government_vehicle" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Was a government vehicle involved? <span className="text-red-500">*</span>
                </label>
                <select
                  id="government_vehicle"
                  name="government_vehicle"
                  value={answers.government_vehicle}
                  onChange={(e) => handleAnswerChange('government_vehicle', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No, standard private / commercial</option>
                  <option value="yes">Yes (Police, Postal, City Bus, etc.)</option>
                </select>
                {errors.government_vehicle && <p className="text-[11px] text-red-600 mt-0.5">{errors.government_vehicle}</p>}
              </div>
            </div>

            {/* Step 2 Actions */}
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <button
                type="button"
                id="prev-step-2"
                onClick={handlePrev}
                className="prev-step inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-full border border-slate-300 transition text-xs sm:text-sm"
              >
                ← Back
              </button>
              <button
                type="button"
                id="next-step-2"
                onClick={handleNext}
                className="btn-primary-mva next-step inline-flex items-center gap-2 bg-[#C7FD0D] hover:bg-[#AEDB0A] text-[#0C1E36] font-extrabold py-3 px-8 rounded-full shadow-neon transition"
              >
                <span>Next</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 3: INJURY & MEDICAL TREATMENT                           */}
          {/* ============================================================ */}
          <div
            id="step-3"
            className={`form-step space-y-4 ${currentStep === 3 ? 'block' : 'hidden'}`}
          >
            <div className="border-b border-slate-100 pb-2">
              <h5 className="font-extrabold text-base text-[#0C1E36]">
                Step 3: Injuries &amp; Medical Treatment
              </h5>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* injured */}
              <div>
                <label htmlFor="injured" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Were you injured in the accident? <span className="text-red-500">*</span>
                </label>
                <select
                  id="injured"
                  name="injured"
                  value={answers.injured}
                  onChange={(e) => handleAnswerChange('injured', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">Yes, suffered physical injuries</option>
                  <option value="no">No physical injury</option>
                </select>
                {errors.injured && <p className="text-[11px] text-red-600 mt-0.5">{errors.injured}</p>}
              </div>

              {/* treatment_timing (Conditional: shown ONLY if injured === 'yes') */}
              <div style={{ display: answers.injured === 'yes' ? 'block' : 'none' }}>
                <label htmlFor="treatment_timing" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  When did you first seek treatment? <span className="text-red-500">*</span>
                </label>
                <select
                  id="treatment_timing"
                  name="treatment_timing"
                  value={answers.treatment_timing}
                  onChange={(e) => handleAnswerChange('treatment_timing', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="within_14">Within 14 days (Emergency, Urgent, Doctor)</option>
                  <option value="same_day">Same day (ER / Ambulance)</option>
                  <option value="after_14">After 14 days</option>
                  <option value="not_yet">Planning to go / Not yet</option>
                </select>
                {errors.treatment_timing && <p className="text-[11px] text-red-600 mt-0.5">{errors.treatment_timing}</p>}
              </div>

              {/* treatment_status (Conditional: shown ONLY if injured === 'yes') */}
              <div style={{ display: answers.injured === 'yes' ? 'block' : 'none' }}>
                <label htmlFor="treatment_status" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Current Medical Care Status <span className="text-red-500">*</span>
                </label>
                <select
                  id="treatment_status"
                  name="treatment_status"
                  value={answers.treatment_status}
                  onChange={(e) => handleAnswerChange('treatment_status', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="ongoing">Ongoing therapy / Doctor appointments</option>
                  <option value="surgery_scheduled">Surgery recommended / scheduled</option>
                  <option value="completed">Completed treatment</option>
                  <option value="none">No ongoing care</option>
                </select>
                {errors.treatment_status && <p className="text-[11px] text-red-600 mt-0.5">{errors.treatment_status}</p>}
              </div>

              {/* working */}
              <div>
                <label htmlFor="working" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Did you miss work or lose income? <span className="text-red-500">*</span>
                </label>
                <select
                  id="working"
                  name="working"
                  value={answers.working}
                  onChange={(e) => handleAnswerChange('working', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No lost wages</option>
                  <option value="yes">Yes, missed work / lost wages</option>
                  <option value="disabled">Permanently unable to work</option>
                </select>
                {errors.working && <p className="text-[11px] text-red-600 mt-0.5">{errors.working}</p>}
              </div>
            </div>

            {/* Step 3 Actions */}
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <button
                type="button"
                id="prev-step-3"
                onClick={handlePrev}
                className="prev-step inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-full border border-slate-300 transition text-xs sm:text-sm"
              >
                ← Back
              </button>
              <button
                type="button"
                id="next-step-3"
                onClick={handleNext}
                className="btn-primary-mva next-step inline-flex items-center gap-2 bg-[#C7FD0D] hover:bg-[#AEDB0A] text-[#0C1E36] font-extrabold py-3 px-8 rounded-full shadow-neon transition"
              >
                <span>Next</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 4: INSURANCE & LEGAL STATUS                             */}
          {/* ============================================================ */}
          <div
            id="step-4"
            className={`form-step space-y-4 ${currentStep === 4 ? 'block' : 'hidden'}`}
          >
            <div className="border-b border-slate-100 pb-2">
              <h5 className="font-extrabold text-base text-[#0C1E36]">
                Step 4: Legal &amp; Insurance Status
              </h5>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* insured */}
              <div>
                <label htmlFor="insured" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Were you covered by auto insurance? <span className="text-red-500">*</span>
                </label>
                <select
                  id="insured"
                  name="insured"
                  value={answers.insured}
                  onChange={(e) => handleAnswerChange('insured', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">Yes, I had auto insurance</option>
                  <option value="no">No auto insurance at the time</option>
                </select>
                {errors.insured && <p className="text-[11px] text-red-600 mt-0.5">{errors.insured}</p>}
              </div>

              {/* um (Conditional: shown ONLY if insured === 'no') */}
              <div style={{ display: answers.insured === 'no' ? 'block' : 'none' }}>
                <label htmlFor="um" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Do you have Uninsured Motorist (UM)? <span className="text-red-500">*</span>
                </label>
                <select
                  id="um"
                  name="um"
                  value={answers.um}
                  onChange={(e) => handleAnswerChange('um', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select UM status</option>
                  <option value="yes">Yes, policy has UM coverage</option>
                  <option value="no">No UM coverage</option>
                  <option value="unknown">Not sure</option>
                </select>
                {errors.um && <p className="text-[11px] text-red-600 mt-0.5">{errors.um}</p>}
              </div>

              {/* household_um (Conditional: shown ONLY if insured === 'no' AND um === 'no') */}
              <div style={{ display: (answers.insured === 'no' && answers.um === 'no') ? 'block' : 'none' }}>
                <label htmlFor="household_um" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Does someone in your home have auto insurance? <span className="text-red-500">*</span>
                </label>
                <select
                  id="household_um"
                  name="household_um"
                  value={answers.household_um}
                  onChange={(e) => handleAnswerChange('household_um', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select household coverage</option>
                  <option value="yes">Yes, a household relative has insurance</option>
                  <option value="no">No household insurance</option>
                </select>
                {errors.household_um && <p className="text-[11px] text-red-600 mt-0.5">{errors.household_um}</p>}
              </div>

              {/* representation */}
              <div>
                <label htmlFor="representation" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Currently represented by an attorney? <span className="text-red-500">*</span>
                </label>
                <select
                  id="representation"
                  name="representation"
                  value={answers.representation}
                  onChange={(e) => handleAnswerChange('representation', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No, I do NOT currently have a lawyer</option>
                  <option value="yes">Yes, I currently have a lawyer</option>
                </select>
                {errors.representation && <p className="text-[11px] text-red-600 mt-0.5">{errors.representation}</p>}
              </div>

              {/* retained (Conditional: shown ONLY if representation === 'no') */}
              <div style={{ display: answers.representation === 'no' ? 'block' : 'none' }}>
                <label htmlFor="retained" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Have you signed retainer with any law firm? <span className="text-red-500">*</span>
                </label>
                <select
                  id="retained"
                  name="retained"
                  value={answers.retained}
                  onChange={(e) => handleAnswerChange('retained', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No agreement signed</option>
                  <option value="yes">Yes, signed retainer</option>
                </select>
                {errors.retained && <p className="text-[11px] text-red-600 mt-0.5">{errors.retained}</p>}
              </div>

              {/* rejected (Conditional: shown ONLY if representation === 'no') */}
              <div style={{ display: answers.representation === 'no' ? 'block' : 'none' }}>
                <label htmlFor="rejected" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Has any attorney rejected this claim? <span className="text-red-500">*</span>
                </label>
                <select
                  id="rejected"
                  name="rejected"
                  value={answers.rejected}
                  onChange={(e) => handleAnswerChange('rejected', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No, haven&apos;t been rejected</option>
                  <option value="yes">Yes, a lawyer declined my case</option>
                </select>
                {errors.rejected && <p className="text-[11px] text-red-600 mt-0.5">{errors.rejected}</p>}
              </div>

              {/* attorney_dropped (Conditional: shown ONLY if representation === 'no') */}
              <div style={{ display: answers.representation === 'no' ? 'block' : 'none' }}>
                <label htmlFor="attorney_dropped" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Did previous attorney drop your case? <span className="text-red-500">*</span>
                </label>
                <select
                  id="attorney_dropped"
                  name="attorney_dropped"
                  value={answers.attorney_dropped}
                  onChange={(e) => handleAnswerChange('attorney_dropped', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No, never dropped</option>
                  <option value="yes">Yes, previous attorney dropped</option>
                </select>
                {errors.attorney_dropped && <p className="text-[11px] text-red-600 mt-0.5">{errors.attorney_dropped}</p>}
              </div>

              {/* settled */}
              <div>
                <label htmlFor="settled" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Has this case already settled or signed? <span className="text-red-500">*</span>
                </label>
                <select
                  id="settled"
                  name="settled"
                  value={answers.settled}
                  onChange={(e) => handleAnswerChange('settled', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="no">No, claim has not settled</option>
                  <option value="yes">Yes, already settled / release signed</option>
                </select>
                {errors.settled && <p className="text-[11px] text-red-600 mt-0.5">{errors.settled}</p>}
              </div>

              {/* adult */}
              <div>
                <label htmlFor="adult" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Are you at least 18 years old? <span className="text-red-500">*</span>
                </label>
                <select
                  id="adult"
                  name="adult"
                  value={answers.adult}
                  onChange={(e) => handleAnswerChange('adult', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="yes">Yes, I am an adult (18+)</option>
                  <option value="no">No, under 18</option>
                </select>
                {errors.adult && <p className="text-[11px] text-red-600 mt-0.5">{errors.adult}</p>}
              </div>

              {/* guardian (Conditional: shown ONLY if adult === 'no') */}
              <div style={{ display: answers.adult === 'no' ? 'block' : 'none' }}>
                <label htmlFor="guardian" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Do you have a parent / guardian to sign? <span className="text-red-500">*</span>
                </label>
                <select
                  id="guardian"
                  name="guardian"
                  value={answers.guardian}
                  onChange={(e) => handleAnswerChange('guardian', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes, parent or guardian available</option>
                  <option value="no">No guardian available</option>
                </select>
                {errors.guardian && <p className="text-[11px] text-red-600 mt-0.5">{errors.guardian}</p>}
              </div>

              {/* residence_state */}
              <div>
                <label htmlFor="residence_state" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Your Current State of Residence <span className="text-red-500">*</span>
                </label>
                <select
                  id="residence_state"
                  name="residence_state"
                  value={answers.residence_state}
                  onChange={(e) => handleAnswerChange('residence_state', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                >
                  {US_STATES.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label} ({st.value})
                    </option>
                  ))}
                </select>
                {errors.residence_state && <p className="text-[11px] text-red-600 mt-0.5">{errors.residence_state}</p>}
              </div>
            </div>

            {/* Step 4 Actions */}
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <button
                type="button"
                id="prev-step-4"
                onClick={handlePrev}
                className="prev-step inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-full border border-slate-300 transition text-xs sm:text-sm"
              >
                ← Back
              </button>
              <button
                type="button"
                id="next-step-4"
                onClick={handleNext}
                className="btn-primary-mva next-step inline-flex items-center gap-2 bg-[#C7FD0D] hover:bg-[#AEDB0A] text-[#0C1E36] font-extrabold py-3 px-8 rounded-full shadow-neon transition"
              >
                <span>Next</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 5: CONTACT & CONSENT                                    */}
          {/* ============================================================ */}
          <div
            id="step-5"
            className={`form-step space-y-4 ${currentStep === 5 ? 'block' : 'hidden'}`}
          >
            <div className="border-b border-slate-100 pb-2">
              <h5 className="font-extrabold text-base text-[#0C1E36]">
                Step 5: Contact Details &amp; Evaluation Delivery
              </h5>
              <p className="text-xs text-slate-500">Where should we deliver your case assessment results?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* first_name */}
              <div>
                <label htmlFor="first_name" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={contact.first_name}
                  onChange={(e) => setContact({ ...contact, first_name: e.target.value })}
                  placeholder="John"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                />
                {errors.first_name && <p className="text-[11px] text-red-600 mt-0.5">{errors.first_name}</p>}
              </div>

              {/* last_name */}
              <div>
                <label htmlFor="last_name" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={contact.last_name}
                  onChange={(e) => setContact({ ...contact, last_name: e.target.value })}
                  placeholder="Doe"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                />
                {errors.last_name && <p className="text-[11px] text-red-600 mt-0.5">{errors.last_name}</p>}
              </div>

              {/* phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Phone (US Mobile) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                />
                {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
              </div>

              {/* email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
              </div>

              {/* zip */}
              <div className="sm:col-span-2">
                <label htmlFor="zip" className="block text-xs font-bold text-[#0C1E36] mb-1">
                  ZIP Code (5 Digits) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  maxLength={5}
                  value={contact.zip}
                  onChange={(e) => setContact({ ...contact, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                  placeholder="75001"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C7FD0D] focus:border-[#0C1E36] outline-none transition"
                />
                {errors.zip && <p className="text-[11px] text-red-600 mt-0.5">{errors.zip}</p>}
              </div>
            </div>

            {/* ============================================================ */}
            {/* EXACT CONSENT TEXT DIRECTLY ABOVE THE BUTTON                 */}
            {/* ============================================================ */}
            <div className="tcpa-disclosure-wrapper bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200 mt-3 mb-3">
              <input type="hidden" id="leadid_tcpa_disclosure" />
              <label
                htmlFor="leadid_tcpa_disclosure"
                className="block text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal select-none"
              >
                By clicking &quot;Check my claim&quot;, I give my prior express written consent for Settlement Scout (operated by OPTIMAX AI LTD), Legal Leadz LLC and HQ Intake.com, LLC to call and text me about my accident claim at the number I provided, including a call from OPTIMAX AI LTD before I am transferred, and including calls and texts made using automated technology and artificial or prerecorded voice. Consent is not a condition of any purchase or service. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help. You agree to our{' '}
                <a
                  href="https://check.settlementscout.org/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0C1E36] hover:underline font-bold"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://check.settlementscout.org/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0C1E36] hover:underline font-bold"
                >
                  Terms of Use
                </a>
                .
              </label>
            </div>

            {/* Step 5 Submit Button and Back Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                id="prev-step-5"
                onClick={handlePrev}
                className="prev-step w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-full border border-slate-300 transition text-xs sm:text-sm"
              >
                ← Back
              </button>

              {/* Exact button text: Check my claim */}
              <button
                type="submit"
                id="submit_btn"
                disabled={isSubmitting}
                className="btn_submit btn-primary-mva w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#C7FD0D] hover:bg-[#AEDB0A] text-[#0C1E36] font-black text-base sm:text-lg py-3.5 px-8 rounded-full shadow-neon hover:shadow-neon-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0C1E36]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Evaluating Claim...</span>
                  </>
                ) : (
                  <>
                    <span>Check my claim</span>
                    <span className="text-xl font-black">→</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust badges directly under submit */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>256-Bit SSL Encrypted</span>
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Free &amp; Confidential</span>
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Zero Obligation</span>
              </span>
            </div>
          </div>
        </form>

        {/* EXACT JORNAYA & TRUSTEDFORM SCRIPTS DIRECTLY BELOW FORM TAG */}
        <TrackingScripts />
      </div>
    </div>
  );
}

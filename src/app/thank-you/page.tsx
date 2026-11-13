'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  const [leadInfo, setLeadInfo] = useState<{
    lead_id?: string;
    first_name?: string;
    phone?: string;
    state?: string;
  }>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('mva_lead_result');
        if (stored) {
          setLeadInfo(JSON.parse(stored));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden text-center p-8 sm:p-12">
          
          {/* Success Check Icon */}
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="text-xs uppercase font-extrabold tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
            Claim Evaluation Successfully Received
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-[#1B2A4A] mt-4 mb-2">
            Thank You{leadInfo.first_name ? `, ${leadInfo.first_name}` : ''}!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-6">
            Your motor vehicle accident claim has been matched with our top personal injury legal team.
          </p>

          {/* Reference ID Pill */}
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 mb-8 border border-slate-200">
            <span>Reference ID:</span>
            <strong className="text-blue-600 font-mono tracking-wider">
              {leadInfo.lead_id || 'MVA-EVAL-' + Math.floor(100000 + Math.random() * 900000)}
            </strong>
          </div>

          {/* What to Expect Next */}
          <div className="text-left bg-slate-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 mb-8 space-y-4">
            <h3 className="font-bold text-slate-900 text-lg border-b border-gray-200 pb-2">
              What Happens Right Now:
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Priority Case Review</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Our case specialists are currently assessing the accident severity, liability factors, and policy limits for your region.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Incoming Call from Specialist</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Expect a call {leadInfo.phone ? `at ${leadInfo.phone}` : 'at your phone number'} within the next few minutes from an intake coordinator to confirm details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Free Attorney Consultation</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  You will speak directly with an experienced personal injury attorney who will explain the maximum compensation value of your claim.
                </p>
              </div>
            </div>
          </div>

          {/* Need Immediate Help? */}
          <div className="bg-gradient-to-r from-[#1B2A4A] to-[#1E3A8A] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="text-left">
              <h4 className="font-bold text-lg text-white">Need to Speak With Someone Immediately?</h4>
              <p className="text-xs sm:text-sm text-blue-200">
                Our 24/7 legal helpline is open now. Call with your reference ID.
              </p>
            </div>
            <a
              href="tel:18884562524"
              className="inline-flex items-center gap-2 bg-[#0C1E36] hover:bg-[#173862] text-white font-extrabold px-6 py-3 rounded-xl shadow-md transition shrink-0"
            >
              <svg className="w-4 h-4 text-[#C7FD0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (888) 456-MVA1</span>
            </a>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="text-sm font-bold text-blue-600 hover:text-blue-800 underline"
            >
              ← Return to MVA Claimz Homepage
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}

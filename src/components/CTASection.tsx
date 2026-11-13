import React from 'react';

export default function CTASection() {
  return (
    <section className="cta-banner" id="cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          Ready to Get the Compensation You Deserve?
        </h2>
        <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto opacity-90">
          Start your free case evaluation nationwide today with zero upfront costs.
        </p>
        <a
          href="#home"
          className="btn-cta-orange shadow-neon-lg"
        >
          Get My Free Case Review →
        </a>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-slate-300 font-semibold">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#C7FD0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            100% Free Consultation
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#C7FD0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Completely Confidential
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#C7FD0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            No Upfront Legal Fees
          </span>
        </div>
      </div>
    </section>
  );
}

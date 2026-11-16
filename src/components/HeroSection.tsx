'use client';

import React from 'react';
import MultiStepForm from './MultiStepForm';

export default function HeroSection() {
  return (
    <header className="hero relative overflow-hidden py-12 lg:py-16" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Multi-Step Evaluation Form (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <MultiStepForm />
          </div>

          {/* Right Column: Headline, Trust Badges & Claim Info (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-white lg:pl-4">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#C7FD0D] animate-ping" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-100">
                Legal Injury Network • Free Case Review
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-4">
              Injured in an Accident? <br />
              Find Out If You <span className="text-[#C7FD0D] underline decoration-[#C7FD0D]/40 decoration-wavy">Qualify</span>.
            </h1>

            {/* Subheadline - Plain 'connect with an accident attorney' */}
            <p className="hero-subheadline text-base sm:text-lg text-slate-200/90 leading-relaxed mb-6 max-w-2xl">
              Connect with an accident attorney. Fast, free, and strictly no-obligation.
            </p>

            {/* Trust Badges */}
            <div className="trust-badges flex flex-wrap gap-3 mb-8">
              <div className="badge-item bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No Win, No Fee</span>
              </div>
              <div className="badge-item bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Confidential</span>
              </div>
              <div className="badge-item bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Available</span>
              </div>
            </div>

            {/* Key Benefits Card - Clean, professional, zero dollar estimates */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-7 rounded-3xl shadow-2xl mb-8 space-y-4">
              <h4 className="text-lg sm:text-xl font-black text-white m-0">
                What to Expect From Your Review
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you were injured due to another driver&apos;s negligence, an attorney can evaluate your accident details, discuss your options, and help pursue compensation for medical bills, vehicle damage, and lost income.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                  <div className="text-xs font-extrabold text-[#C7FD0D] mb-1">01. Free Intake</div>
                  <div className="text-xs text-slate-300">Complete our simple form in less than 2 minutes</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                  <div className="text-xs font-extrabold text-[#C7FD0D] mb-1">02. Claim Review</div>
                  <div className="text-xs text-slate-300">Legal team examines accident facts and liability</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                  <div className="text-xs font-extrabold text-[#C7FD0D] mb-1">03. Consultation</div>
                  <div className="text-xs text-slate-300">Speak directly with an attorney regarding your case</div>
                </div>
              </div>
            </div>

            {/* Rapid Trust Highlights - No dollar amounts, no guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-2 text-center text-xs text-slate-300">
              <div className="border-r border-white/10 pr-2">
                <span className="text-lg font-black text-white block">Fast</span>
                <span className="text-slate-400">Intake Review</span>
              </div>
              <div className="border-r border-white/10 pr-2">
                <span className="text-lg font-black text-[#C7FD0D] block">$0 Upfront</span>
                <span className="text-slate-400">Contingency Fee</span>
              </div>
              <div>
                <span className="text-lg font-black text-white block">No Cost</span>
                <span className="text-slate-400">Unless You Win</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

'use client';

import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';

export default function HeroSection() {
  // Interactive settlement severity estimator state: 'minor' | 'moderate' | 'severe'
  const [severity, setSeverity] = useState<'minor' | 'moderate' | 'severe'>('moderate');

  const estimates = {
    minor: '$15,000 - $45,000',
    moderate: '$50,000 - $250,000',
    severe: '$250,000 - $1,500,000+',
  };

  return (
    <header className="hero relative overflow-hidden py-12 lg:py-16" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Multi-Step Evaluation Form (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <MultiStepForm />
          </div>

          {/* Right Column: Headline, Trust Badges & Interactive Settlement Estimator (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-white lg:pl-4">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#C7FD0D] animate-ping" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-100">
                Nationwide Legal Injury Network • Free Evaluation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-4">
              Injured in an Accident? <br />
              Get Your <span className="text-[#C7FD0D] underline decoration-[#C7FD0D]/40 decoration-wavy">Settlement</span>.
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline text-base sm:text-lg text-slate-200/90 leading-relaxed mb-6 max-w-2xl">
              Connect with top-rated motor vehicle accident attorneys specialized in maximizing your compensation. Fast, free, and strictly no-obligation.
            </p>

            {/* Trust Badges */}
            <div className="trust-badges flex flex-wrap gap-3 mb-6">
              <div className="badge-item bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No Win, No Fee</span>
              </div>
              <div className="badge-item bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>All 50 States</span>
              </div>
              <div className="badge-item bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Available</span>
              </div>
            </div>

            {/* Modern Glass Card Settlement Estimator matching mvaselect.com */}
            <div className="settlement-estimator bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-7 rounded-3xl shadow-2xl mb-6">
              <div className="flex items-center gap-2.5 mb-2">
                <svg className="w-5 h-5 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h4 className="text-lg sm:text-xl font-black text-white m-0">
                  Estimate Your Potential Payout
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Select your accident severity to calculate estimated settlement ranges:
              </p>

              {/* 3 Severity Selector Buttons */}
              <div className="grid grid-cols-3 gap-3" id="severity-card-group">
                <button
                  type="button"
                  onClick={() => setSeverity('minor')}
                  className={`p-3.5 rounded-2xl text-center border transition-all ${
                    severity === 'minor'
                      ? 'bg-[#C7FD0D] border-[#C7FD0D] text-[#0C1E36] font-black shadow-neon scale-[1.03]'
                      : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <svg className="w-5 h-5 mx-auto mb-1.5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-extrabold block">Minor</span>
                  <span className="text-[10px] block opacity-80 mt-0.5">Soft Tissue</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSeverity('moderate')}
                  className={`p-3.5 rounded-2xl text-center border transition-all ${
                    severity === 'moderate'
                      ? 'bg-[#C7FD0D] border-[#C7FD0D] text-[#0C1E36] font-black shadow-neon scale-[1.03]'
                      : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <svg className="w-5 h-5 mx-auto mb-1.5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-extrabold block">Moderate</span>
                  <span className="text-[10px] block opacity-80 mt-0.5">Fractures / ER</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSeverity('severe')}
                  className={`p-3.5 rounded-2xl text-center border transition-all ${
                    severity === 'severe'
                      ? 'bg-[#C7FD0D] border-[#C7FD0D] text-[#0C1E36] font-black shadow-neon scale-[1.03]'
                      : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <svg className="w-5 h-5 mx-auto mb-1.5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-extrabold block">Severe</span>
                  <span className="text-[10px] block opacity-80 mt-0.5">Critical Surgery</span>
                </button>
              </div>

              {/* Live Estimate Result Display */}
              <div className="mt-5 p-4 rounded-2xl bg-black/30 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                  Estimated Compensation Range
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#C7FD0D] tracking-tight block">
                  {estimates[severity]}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  *Based on past typical settlement outcomes. Final settlement depends on case liability and medical damages.
                </span>
              </div>
            </div>

            {/* Rapid Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 text-center text-xs text-slate-300">
              <div className="border-r border-white/10 pr-2">
                <span className="text-lg font-black text-white block">99.2%</span>
                <span className="text-slate-400">Match Rate</span>
              </div>
              <div className="border-r border-white/10 pr-2">
                <span className="text-lg font-black text-[#C7FD0D] block">$500M+</span>
                <span className="text-slate-400">Recovered</span>
              </div>
              <div>
                <span className="text-lg font-black text-white block">$0 Due</span>
                <span className="text-slate-400">Unless You Win</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

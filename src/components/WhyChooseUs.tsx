import React from 'react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'No Upfront Fees',
      desc: 'Our network works on a contingency basis. You pay nothing out of pocket unless we win your accident settlement.',
      icon: (
        <svg className="w-7 h-7 text-[#0C1E36]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Expert Law Firms',
      desc: 'We match you with highly qualified trial firms having extensive litigation experience against major insurance carriers.',
      icon: (
        <svg className="w-7 h-7 text-[#0C1E36]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: 'Rapid Processing',
      desc: 'Intake systems evaluate your claim automatically so you can be connected with a legal advocate in minutes.',
      icon: (
        <svg className="w-7 h-7 text-[#0C1E36]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Maximum Recovery',
      desc: 'Statistics prove represented claimants receive significantly higher settlement payouts than individuals who settle alone.',
      icon: (
        <svg className="w-7 h-7 text-[#0C1E36]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1E36]">
            Why Choose MVA Claimz?
          </h2>
          <div className="title-underline" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            We are built to help accident victims fight back against insurance companies and secure the compensation they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Midnight Navy Stats Panel */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#0C1E36] via-[#112847] to-[#173862] border border-white/10">
              <div className="absolute top-2 right-2 p-4 opacity-5 pointer-events-none text-white">
                <svg className="w-48 h-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C7FD0D] block mb-2">
                Proven Track Record
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-8">
                Network Statistics
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="border-b border-white/10 pb-5">
                  <span className="text-4xl sm:text-5xl font-black text-white block tracking-tight">
                    99.2%
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    Connection &amp; Eligibility Success Rate
                  </span>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <span className="text-4xl sm:text-5xl font-black text-[#C7FD0D] block tracking-tight">
                    $500M+
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    Total Compensation Recovered by Attorneys
                  </span>
                </div>

                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white block tracking-tight">
                    50 States
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    Nationwide Legal Representation Coverage
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Items */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="feature-card group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C7FD0D]/20 text-[#0C1E36] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h4 className="text-lg font-black text-[#0C1E36] mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function RecentSettlementsSection() {
  const settlements = [
    {
      amount: '$1.2 Million',
      type: 'Commercial Truck Collision',
      desc: 'Recovered for a client with permanent spinal injuries following an 18-wheeler accident. Case settled before trial with maximum advocacy.',
      state: 'California Settlement',
    },
    {
      amount: '$450,000',
      type: 'Drunk Driving Collision',
      desc: 'Full policy limits achieved for medical bills, car replacement, and pain and suffering after a head-on collision caused by a DUI driver. Justice secured rapidly.',
      state: 'Texas Settlement',
    },
    {
      amount: '$825,000',
      type: 'Pedestrian / Van Strike',
      desc: 'Maximum payout secured for a victim struck in a marked crosswalk by a commercial delivery van. Compassionate medical and legal support provided.',
      state: 'Florida Settlement',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1E36]">
            Record Settlements
          </h2>
          <div className="title-underline" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our network of experienced trial attorneys has recovered over $500,000,000 for accident victims nationwide.
          </p>
        </div>

        {/* 3 Prominent Settlement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {settlements.map((item) => (
            <div
              key={item.type}
              className="case-card bg-white rounded-2xl border border-slate-200/80 p-8 shadow-card hover:shadow-card-hover hover:border-[#C7FD0D] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="case-amount-badge mb-4 text-[#0C1E36] bg-[#C7FD0D]/20 border border-[#C7FD0D]/40 font-black text-xl px-4 py-1.5 rounded-full inline-block">
                  {item.amount}
                </span>

                <h4 className="text-xl font-black text-[#0C1E36] mb-3">
                  {item.type}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#0C1E36]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{item.state}</span>
                </span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                  $0 Fee Guarantee
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8 italic">
          *Results vary based on individual accident circumstances, injury severity, insurance policy limits, and jurisdiction. Past outcomes do not predict future results.
        </p>

      </div>
    </section>
  );
}

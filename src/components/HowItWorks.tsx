import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Free Evaluation',
      desc: 'Fill out our rapid online case review form or call us directly. We gather liability details and accident facts at zero cost to you.',
    },
    {
      step: '2',
      title: 'Immediate Investigation',
      desc: 'Your matched attorney immediately initiates discovery, collecting official police crash reports, witness testimonies, and medical records.',
    },
    {
      step: '3',
      title: 'Aggressive Negotiation',
      desc: 'The legal team contacts insurance adjusters directly, presenting verified damages to demand the highest possible financial recovery.',
    },
    {
      step: '4',
      title: 'Settlement Paid',
      desc: 'Once the settlement is reached or won, you receive your compensation directly to pay off medical bills, repair vehicle, and cover lost wages.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1E36]">
            Our Proven Legal Process
          </h2>
          <div className="title-underline" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            We streamline the path from injury to maximum compensation with zero out-of-pocket costs.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="feature-card flex flex-col justify-between group hover:border-[#C7FD0D] relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0C1E36] text-[#C7FD0D] border-2 border-[#C7FD0D] flex items-center justify-center font-black text-lg shadow-md group-hover:scale-110 transition-transform">
                    {s.step}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400 group-hover:text-[#0C1E36] transition-colors">
                    Phase 0{s.step}
                  </span>
                </div>

                <h4 className="text-lg font-black text-[#0C1E36] mb-2">
                  {s.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0C1E36]">
                <span>Phase {s.step} of 4</span>
                <span className="text-[#C7FD0D] bg-[#0C1E36] px-2.5 py-0.5 rounded-full text-[10px]">
                  $0 Upfront
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#home"
            className="btn-nav-cta py-3.5 px-8 text-sm sm:text-base font-black shadow-neon"
          >
            Start Your Free Case Review Now →
          </a>
        </div>

      </div>
    </section>
  );
}

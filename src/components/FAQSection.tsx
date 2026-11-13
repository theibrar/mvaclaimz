'use client';

import React, { useState } from 'react';

const faqsLeft = [
  {
    q: 'How much is my accident claim worth?',
    a: 'Every claim is unique. Factors include total medical bills, lost wages, vehicle damage, future medical needs, and pain and suffering. Our partner trial attorneys work aggressively to maximize every dollar for your specific situation.',
  },
  {
    q: 'How long do I have to file a claim?',
    a: 'Statutes of limitations vary by state (typically 1 to 3 years from the date of the collision). It is critical to start the process as soon as possible after your accident to preserve scene evidence, witness memories, and your legal rights.',
  },
  {
    q: 'How long will it take to get my settlement?',
    a: 'Timelines vary. Straightforward claims with clear liability can settle within a few months, while complex litigations involving severe injuries or commercial carriers may take longer to ensure full future medical costs are captured.',
  },
  {
    q: 'What should I do immediately after an accident?',
    a: '1. Call the police and get an official report. 2. Seek medical attention immediately. 3. Take photos of vehicle damage and the crash scene. 4. Collect contact info for all witnesses. 5. Do NOT give a recorded statement to the other insurance company before speaking with legal counsel.',
  },
];

const faqsRight = [
  {
    q: 'How much does this case evaluation cost?',
    a: 'There are zero upfront costs. Our network of attorneys works on a strict contingency fee basis — meaning they only get paid if they win your settlement. If you don\'t recover money, you pay nothing.',
  },
  {
    q: 'What if the other driver was uninsured?',
    a: 'You may still be able to recover substantial compensation through your own Uninsured Motorist (UM) or Underinsured Motorist (UIM) coverage, or resident family policies. Our attorneys are experts at uncovering all available insurance avenues.',
  },
  {
    q: 'Will my case go to trial?',
    a: 'Over 90% of personal injury cases settle out of court through aggressive pre-trial negotiation. However, attorneys prepare each case as if it is heading to court, which forces insurance carriers to put their highest offers on the table.',
  },
  {
    q: 'Do I need to see a doctor if I don\'t feel pain yet?',
    a: 'Yes. Many car crash injuries, such as whiplash, torn ligaments, and internal bleeding, don\'t show severe symptoms for days due to shock and adrenaline. Seeing a doctor right away protects your physical health and your legal claim.',
  },
];

export default function FAQSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1E36]">
            Frequently Asked Questions
          </h2>
          <div className="title-underline" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Common questions about the accident claim process and how we help you recover maximum compensation.
          </p>
        </div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-4">
            {faqsLeft.map((faq, i) => {
              const isOpen = openLeft === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenLeft(isOpen ? null : i)}
                    className={`w-full flex items-center justify-between p-5 text-left font-bold transition-all ${
                      isOpen
                        ? 'bg-[#C7FD0D] text-[#0C1E36]'
                        : 'bg-white hover:bg-slate-50 text-[#0C1E36]'
                    }`}
                  >
                    <span className="text-sm sm:text-base pr-3 font-extrabold">
                      {faq.q}
                    </span>
                    <span className="text-xl font-black shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 text-sm sm:text-base text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqsRight.map((faq, i) => {
              const isOpen = openRight === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenRight(isOpen ? null : i)}
                    className={`w-full flex items-center justify-between p-5 text-left font-bold transition-all ${
                      isOpen
                        ? 'bg-[#C7FD0D] text-[#0C1E36]'
                        : 'bg-white hover:bg-slate-50 text-[#0C1E36]'
                    }`}
                  >
                    <span className="text-sm sm:text-base pr-3 font-extrabold">
                      {faq.q}
                    </span>
                    <span className="text-xl font-black shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 text-sm sm:text-base text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Contact Support Help Callout */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm max-w-2xl mx-auto">
          <p className="text-sm text-slate-700">
            Have an urgent question about your collision or insurance claim?{' '}
            <a
              href="mailto:hello@mvaclaimz.com"
              className="font-bold text-[#0C1E36] underline hover:text-[#AEDB0A]"
            >
              Email hello@mvaclaimz.com
            </a>{' '}
            or call{' '}
            <a
              href="tel:18884562524"
              className="font-black text-[#0C1E36] hover:underline"
            >
              (888) 456-MVA1
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mark Thompson',
      state: 'California • $245,000 Settlement',
      quote:
        'After my truck accident, I didn\'t know where to turn. MVA Claimz connected me with a specialized attorney who fought for every penny. Professional and efficient!',
      photo: '/img/testimonial_photo_1.png',
    },
    {
      name: 'Sarah Williams',
      state: 'Texas • $180,000 Settlement',
      quote:
        'The team made the process so simple. I filled out the form, got a call back within minutes, and they handled everything. I could focus on my recovery while they handled the law.',
      photo: '/img/testimonial_photo_2.png',
    },
    {
      name: 'David Johnson',
      state: 'Florida • $95,000 Settlement',
      quote:
        'I was worried about legal fees, but MVA Claimz explained everything clearly. Zero upfront costs and they got me a much higher settlement than I expected. Highly recommend!',
      photo: '/img/testimonial_photo_3.png',
    },
    {
      name: 'Jennifer Garcia',
      state: 'Arizona • $120,000 Settlement',
      quote:
        'Superb service! The communication was excellent throughout. They really care about their clients and make sure you get the medical care you need too.',
      photo: '/img/testimonial_photo_4.png',
    },
    {
      name: 'Michael Reed',
      state: 'New York • $65,000 Settlement',
      quote:
        'Quick, easy, and painless. They took the stress out of my insurance claim and I got a great result. Don\'t handle insurance adjusters on your own!',
      photo: '/img/testimonial_photo_5.png',
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1E36]">
            Success Stories
          </h2>
          <div className="title-underline" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Read verified reviews from clients across the country who obtained justice and substantial compensation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-[#C7FD0D] transition-all flex flex-col justify-between border-b-4 border-b-[#C7FD0D]"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#C7FD0D]">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0C1E36]">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{item.state}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

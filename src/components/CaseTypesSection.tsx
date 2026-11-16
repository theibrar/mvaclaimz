import React from 'react';
import Image from 'next/image';

export default function CaseTypesSection() {
  const cases = [
    {
      title: 'Car Accidents',
      desc: 'Rear-end collisions, T-bone impacts, highway pileups, and intersections where driver negligence caused severe physical harm.',
      img: '/img/collision_settlement.png',
    },
    {
      title: 'Commercial Truck Accidents',
      desc: 'Complex litigation involving commercial 18-wheelers, tractor-trailers, and delivery fleets backed by multi-million corporate policies.',
      img: '/img/truck_settlement.png',
    },
    {
      title: 'Motorcycle Accidents',
      desc: 'Dedicated trial representation for high-impact motorcycle injury claims against motorists failing to yield or look twice.',
      img: '/img/mva_accident_scene_1774460139676.png',
    },
    {
      title: 'Pedestrian & Bicycle Injuries',
      desc: 'Advocacy for vulnerable pedestrians struck in marked crosswalks, sidewalks, or parking lots with life-altering trauma.',
      img: '/img/pedestrian_settlement.png',
    },
    {
      title: 'Rideshare (Uber & Lyft) Crashes',
      desc: 'Navigating layered insurance policies and corporate third-party liability rules specific to commercial rideshare passengers and drivers.',
      img: '/img/mva_hero_bg_v2.png',
    },
    {
      title: 'Hit & Run Incidents',
      desc: 'Comprehensive legal assistance even when the other driver flees the scene, recovering through Uninsured Motorist (UM/UIM) policies.',
      img: '/img/mva_lawyer_handshake_1774460157258.png',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1E36]">
            Types of Cases We Handle
          </h2>
          <div className="title-underline" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our network connects you with personal injury attorneys covering every motor vehicle accident category.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="case-card group hover:border-[#C7FD0D] transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0C1E36]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7FD0D]" />
                  <span>{c.title}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-black text-[#0C1E36] mb-2 group-hover:text-[#0C1E36]">
                    {c.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0C1E36] bg-[#C7FD0D]/20 px-3 py-1 rounded-full border border-[#C7FD0D]/30">
                    Contingency Basis ($0 upfront)
                  </span>
                  <a
                    href="#home"
                    className="text-xs font-black uppercase text-[#0C1E36] hover:text-[#AEDB0A] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Evaluate <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

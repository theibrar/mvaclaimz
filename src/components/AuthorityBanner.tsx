import React from 'react';
import Image from 'next/image';

export default function AuthorityBanner() {
  const logos = [
    { name: 'NBC News', src: '/img/logo_nbc.png', width: 90, height: 45 },
    { name: 'ABC News', src: '/img/logo_abc.png', width: 90, height: 45 },
    { name: 'CBS News', src: '/img/logo_cbs.png', width: 90, height: 45 },
    { name: 'FOX News', src: '/img/logo_fox.png', width: 90, height: 45 },
    { name: 'CNN News', src: '/img/logo_cnn.png', width: 90, height: 45 },
  ];

  return (
    <section className="authority-banner py-8 bg-white border-y border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-6">
          Seen &amp; Trusted on Leading News Networks
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

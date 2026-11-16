import React from 'react';
import HeroSection from '@/components/HeroSection';
import AuthorityBanner from '@/components/AuthorityBanner';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import CaseTypesSection from '@/components/CaseTypesSection';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Section: Left Column (Case Evaluation Form) + Right Column (Headline & Benefits) */}
      <HeroSection />

      {/* 2. Authority Banner: Seen & Trusted on National News Networks (NBC, ABC, CBS, FOX, CNN) */}
      <AuthorityBanner />

      {/* 3. Verified Client Reviews & Testimonials */}
      <Testimonials />

      {/* 4. Why Choose MVA Claimz? Stats Panel & Network Features */}
      <WhyChooseUs />

      {/* 5. Types of Accident Claims Covered */}
      <CaseTypesSection />

      {/* 6. Proven 4-Step Legal Process */}
      <HowItWorks />

      {/* 7. Comprehensive FAQ Accordion */}
      <FAQSection />

      {/* 8. Final Call to Action Banner */}
      <CTASection />
    </main>
  );
}

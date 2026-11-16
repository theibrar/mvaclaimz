import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Do Not Call Policy', href: '/dnc' },
    { label: 'Our Partners', href: '/partners' },
    { label: 'DMCA Notice', href: '/dmca' },
  ];

  return (
    <footer id="footer" className="bg-[#000A12] text-slate-400 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/img/logo-white.svg"
                alt="MVA Claimz Logo White"
                width={200}
                height={45}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              MVA Claimz is a legal claim evaluation portal connecting motor vehicle accident victims with qualified personal injury attorneys. Our mission is to ensure accident victims have access to dedicated legal counsel with zero upfront costs.
            </p>
          </div>

          {/* Legal Links (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="footer-heading text-white font-extrabold text-sm uppercase tracking-wider mb-5 relative inline-block">
              Legal Links
            </h5>
            <ul className="footer-link-list space-y-2 text-xs sm:text-sm">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-[#C7FD0D] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us (4 cols) */}
          <div className="lg:col-span-4">
            <h5 className="footer-heading text-white font-extrabold text-sm uppercase tracking-wider mb-5 relative inline-block">
              Contact &amp; Support
            </h5>
            <ul className="footer-link-list space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:hello@mvaclaimz.com"
                  className="flex items-center gap-2.5 hover:text-[#C7FD0D] transition"
                >
                  <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@mvaclaimz.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:18884562524"
                  className="flex items-center gap-2.5 hover:text-[#C7FD0D] transition font-bold"
                >
                  <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(888) 456-MVA1</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <svg className="w-4 h-4 text-[#C7FD0D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Free &amp; Confidential Evaluation</span>
              </li>
              <li className="text-slate-500 text-xs pt-1">
                Website: <span className="text-slate-400">https://mvaclaimz.com/</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Detailed Legal & TCPA Disclaimers matching mvaselect.com */}
        <div className="footer-disclaimer-block text-[11px] leading-relaxed text-slate-500 mt-12 pt-8 border-t border-white/10 space-y-3">
          <p>
            <strong>Legal Notice:</strong> MVA Claimz is a legal advertising service and referral network operated by an independent business, not a law firm, lawyer referral service, or attorney. We do NOT provide legal advice or legal representation. No attorney-client relationship is formed until you sign a written representation agreement with a licensed attorney. Each attorney in our network is an independent contractor and is solely responsible for their own legal services, case outcomes, and client communications.
          </p>

          <p>
            <strong>TCPA &amp; Communication Notice:</strong> By submitting your information, you provide express written consent for MVA Claimz and its attorney network to contact you regarding your case using automated phone calls, text messages (SMS/MMS), and email at the number and address you provide. Standard message and data rates apply. Consent is not a condition of purchase. You may revoke consent at any time by texting STOP or submitting a removal request.
          </p>

          {/* MANDATORY EXACT FOOTER LINE VERBATIM */}
          <p className="text-slate-400 font-semibold pt-2 border-t border-white/5">
            Settlement Scout is a legal advertising service operated by OPTIMAX AI LTD. It is not a law firm and does not provide legal advice. Consultation does not create an attorney-client relationship. Results vary; past results do not predict future outcomes.
          </p>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 mt-8 pt-6 border-t border-white/5 gap-2">
          <span>&copy; {new Date().getFullYear()} MVA Claimz. All rights reserved.</span>
          <span className="text-slate-400">256-Bit SSL Encrypted Intake Portal</span>
        </div>

      </div>
    </footer>
  );
}

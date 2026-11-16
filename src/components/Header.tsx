'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Case Types', href: '#cases' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Notice Banner matching mvaselect.com */}
      <div className="top-notice-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="m-0 text-xs text-slate-600">
            <strong>Note:</strong> This is an advertisement for legal services related to motor vehicle accidents. Not connected with or endorsed by any government agency.
          </p>
        </div>
      </div>

      {/* Main Sticky Navbar matching mvaselect.com */}
      <header className="navbar-custom sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/img/logo.svg"
                alt="MVA Claimz Logo"
                width={200}
                height={45}
                className="h-10 sm:h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link-custom text-sm font-bold text-[#0C1E36] hover:bg-[#C7FD0D]/20 px-3 py-2 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                id="btn-header-cta"
                href="#home"
                className="btn-nav-cta shadow-neon"
              >
                GET FREE CASE REVIEW
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                className="p-2 rounded-lg text-[#0C1E36] hover:bg-slate-100 transition focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-5 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-bold text-[#0C1E36] hover:text-[#0C1E36] hover:bg-[#C7FD0D]/20 py-2.5 px-3 rounded-lg border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="btn-nav-cta w-full text-center py-3.5 shadow-neon"
                >
                  GET FREE CASE REVIEW
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

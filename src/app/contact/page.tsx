'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1B2A4A] tracking-tight">
            Contact MVA Claimz
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Our intake support desk is staffed 24/7. Whether you have an existing claim inquiry or need legal guidance, we are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Direct Channels (5 cols) */}
          <div className="md:col-span-5 bg-[#1B2A4A] text-white rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">
                Direct Contact
              </h3>

              <div>
                <span className="text-xs font-semibold text-blue-300 uppercase block mb-1">
                  Email Support
                </span>
                <a
                  href="mailto:hello@mvaclaimz.com"
                  className="text-lg font-bold text-amber-400 hover:underline block"
                >
                  hello@mvaclaimz.com
                </a>
                <p className="text-xs text-blue-200 mt-1">Typical response within 1 hour</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-300 uppercase block mb-1">
                  Toll-Free Helpline
                </span>
                <a
                  href="tel:18884562524"
                  className="text-lg font-bold text-amber-400 hover:underline block"
                >
                  (888) 456-MVA1
                </a>
                <p className="text-xs text-blue-200 mt-1">(888) 456-2524 • 24/7 Hotline</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-300 uppercase block mb-1">
                  Operating Hours
                </span>
                <p className="text-sm font-semibold text-white">
                  24 Hours a Day • 7 Days a Week
                </p>
                <p className="text-xs text-blue-200 mt-1">Direct intake routing</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-300 uppercase block mb-1">
                  Website
                </span>
                <p className="text-sm font-mono text-gray-300">
                  https://mvaclaimz.com/
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/#claim-form"
                className="w-full inline-block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow transition"
              >
                Go to Free Claim Evaluation →
              </Link>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you for reaching out. One of our intake representatives will review your inquiry and follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Send Us a Direct Message
                </h3>

                <div>
                  <label htmlFor="contact_name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact_email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact_email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_phone" className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact_phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact_message" className="block text-sm font-semibold text-gray-700 mb-1">
                    How Can We Help You?
                  </label>
                  <textarea
                    id="contact_message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your question or case inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}

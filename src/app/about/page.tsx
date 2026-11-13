import Link from 'next/link';

export const metadata = {
  title: 'About Us | MVA Claimz — Nationwide Motor Vehicle Legal Network',
  description: 'Learn how MVA Claimz connects auto accident victims with premier personal injury trial lawyers nationwide with $0 upfront costs.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full">
            Our Mission &amp; Values
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1B2A4A] tracking-tight">
            Leveling the Playing Field for Accident Victims
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            When a car crash disrupts your life, dealing with multi-billion-dollar insurance companies shouldn&apos;t be your burden. MVA Claimz connects you with fearless attorneys dedicated to maximizing your recovery.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed text-base">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-gray-100 pb-3">
            Who We Are
          </h2>
          <p>
            <strong>MVA Claimz</strong> (mvaclaimz.com) is a nationwide legal referral and claim evaluation service operated to protect the rights of motorists, passengers, bicyclists, and pedestrians injured in motor vehicle collisions.
          </p>
          <p>
            Too often, accident victims settle for pennies on the dollar because insurance adjusters use aggressive delay-and-deny tactics. Our mission is to ensure every injured individual has access to elite personal injury legal counsel regardless of their financial situation.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            Our Core Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100">
              <div className="text-blue-600 font-bold text-lg mb-1">1. $0 Upfront Cost</div>
              <p className="text-sm text-gray-600">
                You never pay a dime out of pocket. Our partner attorneys operate exclusively on contingency: no win, no fee.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100">
              <div className="text-blue-600 font-bold text-lg mb-1">2. Top 1% Trial Lawyers</div>
              <p className="text-sm text-gray-600">
                We partner with proven trial lawyers who have recovered millions and aren&apos;t afraid to take greedy insurers to court.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100">
              <div className="text-blue-600 font-bold text-lg mb-1">3. Rapid 24/7 Response</div>
              <p className="text-sm text-gray-600">
                Evidence disappears quickly after a crash. Our intake specialists evaluate claims within minutes, day or night.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100">
              <div className="text-blue-600 font-bold text-lg mb-1">4. Nationwide Coverage</div>
              <p className="text-sm text-gray-600">
                From Texas to California to Florida, our legal partners understand specific state statutes and local courtroom dynamics.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1B2A4A] to-[#2563EB] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Find Out What Your Claim is Worth?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Take 2 minutes to complete our free online evaluation and protect your legal rights before the statute of limitations expires.
          </p>
          <div>
            <Link
              href="/#claim-form"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-lg transition"
            >
              Start Free Evaluation Now
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

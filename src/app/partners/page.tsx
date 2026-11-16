import Link from 'next/link';

export const metadata = {
  title: 'Marketing & Legal Partners | MVA Claimz',
  description: 'List of authorized legal marketing partners, intake centers, and affiliate entities for MVA Claimz and Settlement Scout.',
};

export default function PartnersPage() {
  const partners = [
    {
      name: 'Settlement Scout (OPTIMAX AI LTD)',
      role: 'Legal Advertising & Intake Technology Service Provider',
      site: 'https://check.settlementscout.org',
      details: 'Operates case qualification matching technology and secure telephonic routing.',
    },
    {
      name: 'OPTIMAX AI LTD',
      role: 'Operating Entity & Compliance Coordinator',
      site: 'https://check.settlementscout.org',
      details: 'Coordinates call transfers, data verification, and secure compliance screening before attorney connection.',
    },
    {
      name: 'Legal Leadz LLC',
      role: 'Legal Marketing & Attorney Network Partner',
      site: '#',
      details: 'Connects verified claimants with licensed trial attorneys.',
    },
    {
      name: 'HQ Intake.com, LLC',
      role: 'Intake Support & Claim Verification Partner',
      site: '#',
      details: 'Provides 24/7 telephonic customer support and case qualification assistance.',
    },
    {
      name: 'Independent Personal Injury Law Firms',
      role: 'Licensed Bar Members & Co-Counsel Network',
      site: '#',
      details: 'Independent law firms licensed in your jurisdiction that represent claimants on a contingency fee basis.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-wider bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full">
            Compliance &amp; Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight">
            Marketing &amp; Legal Partners
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            In accordance with TCPA, FCC, and state legal advertising regulations, below is a list of authorized entities that may contact you regarding your motor vehicle accident claim.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            By submitting your claim evaluation on MVA Claimz, you consent to receive telephone calls and text messages from the entities listed below (or their designated co-counsels) to assist you with your legal inquiry.
          </p>

          <div className="divide-y divide-gray-100">
            {partners.map((p, i) => (
              <div key={i} className="py-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900">{p.name}</h3>
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1">
                    {p.role}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    {p.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm font-bold text-blue-600 hover:text-blue-800 underline"
          >
            ← Return to Homepage
          </Link>
        </div>

      </div>
    </main>
  );
}

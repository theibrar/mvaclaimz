import Link from 'next/link';

export const metadata = {
  title: 'DMCA Notice | MVA Claimz',
  description: 'Digital Millennium Copyright Act (DMCA) notice and copyright infringement reporting for MVA Claimz.',
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-wider bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full">
            Intellectual Property
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight">
            DMCA Notice &amp; Copyright Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Procedures for reporting copyright infringement under the Digital Millennium Copyright Act (17 U.S.C. § 512).
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3">
            Notice of Copyright Infringement
          </h2>
          <p>
            MVA Claimz respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this website, please notify our designated copyright agent.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Required Information for DMCA Takedown Notice
          </h3>
          <p>To be effective under 17 U.S.C. § 512(c)(3), your notification must include:</p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material (such as the specific URL).</li>
            <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address.</li>
            <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-4">
            Designated Copyright Agent Contact
          </h3>
          <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 text-sm space-y-1">
            <p><strong>DMCA Designated Agent</strong></p>
            <p>MVA Claimz Copyright Compliance</p>
            <p>Email: <a href="mailto:hello@mvaclaimz.com" className="text-blue-600 underline font-semibold">hello@mvaclaimz.com</a></p>
            <p>Domain: https://mvaclaimz.com/</p>
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

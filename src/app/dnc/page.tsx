import Link from 'next/link';

export const metadata = {
  title: 'Do Not Call (DNC) Policy | MVA Claimz',
  description: 'Do Not Call Policy, opt-out procedures, and telemarketing compliance for MVA Claimz.',
};

export default function DNCPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-wider bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full">
            Consumer Rights
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight">
            Do Not Call (DNC) Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            MVA Claimz respects your privacy and complies fully with the Telephone Consumer Protection Act (TCPA) and federal Do Not Call registry rules.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3">
            Our Commitment
          </h2>
          <p>
            MVA Claimz maintains an internal Do Not Call list. It is our policy to honor all consumer requests to discontinue telephonic communications, including voice calls and SMS text messages.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            How to Request Placement on Our Do Not Call List
          </h3>
          <p>You may opt out of communications at any time through any of the following methods:</p>
          
          <div className="space-y-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <strong className="text-slate-900 block mb-1">1. SMS / Text Message Opt-Out</strong>
              <p className="text-sm text-gray-600">
                Simply reply <strong>STOP</strong>, <strong>END</strong>, <strong>CANCEL</strong>, <strong>UNSUBSCRIBE</strong>, or <strong>QUIT</strong> to any text message received from our platform or partner numbers. You will receive an immediate confirmation of your opt-out.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <strong className="text-slate-900 block mb-1">2. Email Request</strong>
              <p className="text-sm text-gray-600">
                Send an email with the subject line &quot;Do Not Call Request&quot; to{' '}
                <a href="mailto:hello@mvaclaimz.com" className="text-blue-600 font-bold underline">
                  hello@mvaclaimz.com
                </a>
                . Please include the 10-digit telephone number(s) you wish to register.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <strong className="text-slate-900 block mb-1">3. Telephone Request</strong>
              <p className="text-sm text-gray-600">
                Call our toll-free customer helpline at{' '}
                <a href="tel:18884562524" className="text-blue-600 font-bold underline">
                  (888) 456-MVA1
                </a>{' '}
                and inform our representative that you wish to be placed on our Do Not Call list.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 pt-4">
            Processing Time
          </h3>
          <p>
            Automated SMS STOP replies take effect immediately. Email and telephone requests are processed within 24 to 48 business hours, and in all cases well within the statutory 30-day requirement.
          </p>

          <p className="text-xs text-gray-500 pt-4 border-t border-gray-100">
            For further inquiries regarding this policy, please contact our compliance officer at hello@mvaclaimz.com.
          </p>
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

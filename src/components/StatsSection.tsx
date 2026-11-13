export default function StatsSection() {
  const stats = [
    {
      value: '$500M+',
      label: 'Total Compensation Recovered',
      sub: 'For our clients nationwide',
    },
    {
      value: '99.2%',
      label: 'Success & Resolution Rate',
      sub: 'Pre-trial & trial settlements',
    },
    {
      value: '50 States',
      label: 'Nationwide Network',
      sub: 'Top-tier trial attorneys',
    },
    {
      value: '$0 Upfront',
      label: 'Contingency Fee Guarantee',
      sub: "You don't pay unless you win",
    },
  ];

  return (
    <section id="stats-section" className="bg-white py-12 border-b border-gray-100 shadow-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1B2A4A] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

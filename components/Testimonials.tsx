const testimonials = [
  {
    quote:
      'Arbiter transformed how we manage turnovers. What used to take weeks of compiling paper records now comes together in days, fully digital and fully traceable.',
    name: 'CM',
    title: 'Construction Manager',
    project: 'SAGD Project, Alberta',
    initials: 'CM',
  },
  {
    quote:
      'The deficiency tracking alone has saved us from costly surprises at startup. Every punch item is assigned, visible, and closed before we hand over. No exceptions.',
    name: 'PL',
    title: 'Project Lead',
    project: 'LNG Facility, British Columbia',
    initials: 'PL',
  },
  {
    quote:
      "Real-time reporting means our owners see the same numbers we do. There's no more guessing on progress, just clean, accurate data that everyone trusts.",
    name: 'DO',
    title: 'Director of Operations',
    project: 'Oil Sands Owner, Fort McMurray',
    initials: 'DO',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d2b06] overflow-hidden relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-4">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted on the Sites That Matter
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
            >
              {/* Quote mark */}
              <div className="text-[#6dc744] text-5xl font-serif leading-none mb-4 opacity-70">"</div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="w-10 h-10 bg-arbiter-green/30 border border-arbiter-green/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#6dc744] text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

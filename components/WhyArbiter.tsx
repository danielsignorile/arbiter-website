const differentiators = [
  {
    title: 'Purpose-Built for Completions',
    desc: "Not a bolt-on module. Arbiter is designed ground-up for project completion and handover. Every feature exists because the field demanded it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Built by the Field',
    desc: '15+ years of in-field refinement with multi-disciplinary input, from cable pullers to project leads. This is the software those people wish they had.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Offline & Mobile Capable',
    desc: 'Works in remote locations without WiFi or cellular service. Sync when you reconnect and your data is never held hostage by a bad signal.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8.667 14.333A4 4 0 0112 13a4 4 0 013.333 1.333M6.333 12A7 7 0 0112 10a7 7 0 015.667 2M4 9.657A10 10 0 0112 7a10 10 0 018 2.657M1.5 7.5A14 14 0 0112 4a14 14 0 0110.5 3.5" />
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    desc: '80–95% of Arbiter-managed projects completed on budget and on schedule. Over 300 projects across energy, oil sands, mining, and infrastructure.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function WhyArbiter() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-arbiter-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Headline */}
          <div>
            <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">
              Our Differentiators
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight leading-tight mb-6">
              Built Different.{' '}
              <span className="text-arbiter-green">Because the Field Demands It.</span>
            </h2>
            <p className="text-lg text-arbiter-muted leading-relaxed">
              Generic project management software wasn't built for capital construction completions.
              Arbiter was. That difference shows up every day: in the field, at handover, and on the
              bottom line.
            </p>
            <a
              href="#demo"
              className="mt-8 inline-flex items-center gap-2 bg-arbiter-green text-white font-semibold px-6 py-3 rounded-full hover:bg-arbiter-green-dark transition-colors"
            >
              See Why Teams Choose Arbiter
            </a>
          </div>

          {/* Right: 2x2 grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-arbiter-border rounded-2xl p-5 hover:shadow-md hover:border-arbiter-green/30 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-arbiter-green/10 text-arbiter-green rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-arbiter-dark text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-arbiter-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

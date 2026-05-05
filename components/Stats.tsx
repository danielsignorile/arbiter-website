export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-arbiter-green tracking-[0.25em] uppercase mb-4">
          300+ Projects
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight mb-5">
          We are proud of the results our software has helped achieve
        </h2>
        <p className="text-lg text-arbiter-muted max-w-2xl mx-auto leading-relaxed">
          15 years of refinement, over 300 projects completed across energy, oil sands, mining
          and commercial construction.
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: '300+', label: 'Projects Completed' },
            { value: '80–95%', label: 'On Budget & Schedule' },
            { value: '15+', label: 'Years in the Field' },
            { value: '500', label: 'Batch File Upload' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-4xl font-extrabold text-arbiter-green mb-2">{stat.value}</div>
              <div className="text-sm text-arbiter-muted font-medium text-center leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

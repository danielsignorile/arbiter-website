export default function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight leading-tight mb-6">
              Built for the Field,{' '}
              <span className="text-arbiter-green">By the Field</span>
            </h2>
            <p className="text-lg text-arbiter-muted leading-relaxed mb-6">
              Arbiter Completions has developed over a decade of in-field refinement with
              multi-disciplinary input and enhancement. Whether it's pulling cable, walkdowns,
              turnovers, construction or commissioning, Arbiter offers the consistency, control,
              and confidence Project Leaders are looking for.
            </p>
            <p className="text-base text-arbiter-muted leading-relaxed mb-8">
              Our platform was shaped by the people who use it: inspectors, QA/QC leads, project
              managers, and owners, so every workflow feels natural to the crews on the ground.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-arbiter-green text-arbiter-green font-semibold px-6 py-3 rounded-full hover:bg-arbiter-green hover:text-white transition-all duration-200"
            >
              Our History
            </a>
          </div>

          {/* Right: Image with badge */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Field construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b06]/60 via-transparent to-transparent" />
            </div>

            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl px-5 py-4 border border-gray-100">
              <div className="text-2xl font-extrabold text-arbiter-green">15+</div>
              <div className="text-xs font-bold text-arbiter-dark uppercase tracking-wide mt-0.5">Years</div>
              <div className="text-xs text-arbiter-muted mt-0.5">In-field refinement since 2009</div>
            </div>

            {/* Floating top-right badge */}
            <div className="absolute -top-4 -right-4 bg-arbiter-green text-white rounded-xl shadow-lg px-4 py-3 text-center">
              <div className="text-xl font-extrabold">300+</div>
              <div className="text-[10px] font-semibold uppercase tracking-wide opacity-80">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

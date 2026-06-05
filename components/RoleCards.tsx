import { Clipboard, Building2, HardHat, ArrowRight } from 'lucide-react';

const roles = [
  {
    Icon: Clipboard,
    heading: 'Project Managers',
    body: 'Stop chasing paper. Arbiter gives you real-time visibility across every check sheet, punch item, and handover package, so you always know exactly where the project stands.',
  },
  {
    Icon: Building2,
    heading: 'Owner Operators',
    body: 'Your vendors are accountable. Your audit trail is complete. Arbiter ensures that nothing gets handed over until it\'s been inspected, signed off, and documented, with no exceptions.',
  },
  {
    Icon: HardHat,
    heading: 'EPC Contractors',
    body: 'Coordinate multi-discipline completions across large scopes without losing track. Arbiter keeps every trade, every tag, and every system organized from first walkdown to mechanical completion.',
  },
];

export default function RoleCards() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight mb-5">
            Built for Every Stakeholder on the Project
          </h2>
          <p className="text-lg text-arbiter-muted max-w-2xl mx-auto leading-relaxed">
            Whether you're managing the schedule, owning the asset, or delivering the scope,
            Arbiter gives your team what they need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {roles.map((role) => (
            <div
              key={role.heading}
              className="group bg-white border border-arbiter-border rounded-2xl p-7 hover:shadow-xl hover:shadow-arbiter-dark/5 hover:border-arbiter-green/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              <div className="w-11 h-11 bg-arbiter-green/10 text-arbiter-green rounded-xl flex items-center justify-center mb-5 group-hover:bg-arbiter-green group-hover:text-white transition-all duration-200">
                <role.Icon size={22} strokeWidth={1.7} />
              </div>
              <h3 className="font-bold text-arbiter-dark text-lg mb-3">{role.heading}</h3>
              <p className="text-sm text-arbiter-muted leading-relaxed flex-1">{role.body}</p>
              <a
                href="#demo"
                className="mt-6 inline-flex items-center gap-1.5 text-arbiter-green text-sm font-semibold hover:text-arbiter-green-dark transition-colors group/link"
              >
                See how it works
                <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { ClipboardList, ListChecks, ShieldCheck, BarChart2, FolderOpen } from 'lucide-react';

const stages = [
  {
    step: '01',
    name: 'Inspect',
    desc: 'Digital check sheets, mobile and offline capable',
    Icon: ClipboardList,
  },
  {
    step: '02',
    name: 'Track',
    desc: 'Punch lists and deficiencies assigned in real time',
    Icon: ListChecks,
  },
  {
    step: '03',
    name: 'Verify',
    desc: 'ITPs with full audit trail and sign-off',
    Icon: ShieldCheck,
  },
  {
    step: '04',
    name: 'Report',
    desc: 'Earned vs. burned value dashboards for owners',
    Icon: BarChart2,
  },
  {
    step: '05',
    name: 'Handover',
    desc: 'Digital turnover packages compiled in minutes',
    Icon: FolderOpen,
  },
];

export default function Lifecycle() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">
            How Arbiter Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight mb-5">
            One Platform. Every Stage of Completions.
          </h2>
          <p className="text-lg text-arbiter-muted max-w-2xl mx-auto leading-relaxed">
            Arbiter covers the full completions lifecycle, from first walkdown to final handover package.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line, runs between the centres of the first and last icon */}
          <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-arbiter-green/30" />

          <div className="grid grid-cols-5 gap-6">
            {stages.map((stage) => (
              <div key={stage.name} className="flex flex-col items-center text-center">
                {/* Icon circle, ring masks the line for a "chain" look */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-arbiter-green text-arbiter-green flex items-center justify-center shadow-md ring-[5px] ring-[#f5f5f2] mb-5">
                  <stage.Icon size={22} strokeWidth={1.7} />
                </div>
                <p className="text-[10px] font-black text-arbiter-green tracking-[0.18em] uppercase mb-1">
                  {stage.step}. {stage.name}
                </p>
                <p className="text-sm text-arbiter-muted leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline, vertical */}
        <div className="lg:hidden relative">
          {/* Single vertical line from first to last icon centre */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-arbiter-green/30" />

          <div className="space-y-0">
            {stages.map((stage) => (
              <div key={stage.name} className="relative flex gap-5 pb-8 last:pb-0">
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-arbiter-green text-arbiter-green flex items-center justify-center shadow-sm shrink-0 ring-[5px] ring-[#f5f5f2]">
                  <stage.Icon size={20} strokeWidth={1.7} />
                </div>
                <div className="pt-2">
                  <p className="text-[10px] font-black text-arbiter-green tracking-[0.18em] uppercase mb-1">
                    {stage.step}. {stage.name}
                  </p>
                  <p className="text-sm text-arbiter-muted leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

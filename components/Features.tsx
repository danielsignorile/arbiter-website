import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    name: 'SoftChecks',
    href: '/features/softchecks',
    desc: 'Digital check sheets, mobile and offline capable. Run inspections anywhere, no WiFi required.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Actions & Deficiencies',
    href: '/features/actions-and-deficiencies',
    desc: 'Real-time punch list tracking and assignment. Every issue captured, assigned, and closed with a full audit trail.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    name: 'Real-Time Reporting',
    href: '/features/real-time-reporting',
    desc: 'Earned vs. burned value, customizable dashboards. Your owners see what you see, with no progress guesswork.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Dynamic ITP',
    href: '/features/dynamic-itp',
    desc: 'Inspection and Test Plans with a full audit trail. ITPs that adapt to scope changes without losing traceability.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Doculink',
    href: '/features/doculink',
    desc: 'Document repository with batch upload of up to 500 files. Link drawings, specs, and certs directly to inspection records.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    name: 'Dossier (Document Turnover)',
    href: '/features/dossier',
    desc: 'Digital turnover packages archived on client systems. Auto-compile the complete project record at handover, in minutes not weeks.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">
            Platform Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight mb-5">
            Everything You Need to Close Out a Project
          </h2>
          <p className="text-lg text-arbiter-muted max-w-2xl mx-auto leading-relaxed">
            From first check sheet to final turnover package, Arbiter covers every stage of
            the completions lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-6 hover:border-arbiter-green/40 hover:shadow-lg hover:shadow-arbiter-green/5 transition-all duration-200 flex flex-col"
            >
              <div className="w-10 h-10 bg-arbiter-green/10 text-arbiter-green rounded-xl flex items-center justify-center mb-4 group-hover:bg-arbiter-green group-hover:text-white transition-all duration-200">
                {feature.icon}
              </div>
              <h3 className="font-bold text-arbiter-dark text-base mb-2">{feature.name}</h3>
              <p className="text-sm text-arbiter-muted leading-relaxed flex-1">{feature.desc}</p>
              <Link
                href={feature.href}
                className="mt-4 inline-flex items-center gap-1 text-arbiter-green text-xs font-semibold hover:text-arbiter-green-dark transition-colors group/link"
              >
                Learn more
                <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 text-arbiter-green font-semibold text-sm hover:text-arbiter-green-dark transition-colors group"
          >
            Explore All Features
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

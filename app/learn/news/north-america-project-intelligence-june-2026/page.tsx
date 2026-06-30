import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { value: '670+', label: 'Hyperscale Projects in Global Pipeline' },
  { value: '35 GW', label: 'Data Centre Capacity Under Construction (NA)' },
  { value: '$1.15T', label: 'Hyperscaler Capex 2025–2027 (Goldman Sachs)' },
  { value: '$45.1B/mo', label: 'US Data Centre Construction Spend (Dec 2025)' },
];

const energyDevelopments = [
  {
    title: 'Corpus Christi Stage 3 (TX)',
    body: 'Trains 5 and 6 reached substantial completion in March and June 2026 respectively. Train 7 commissioning is actively underway — propane introduction approved by FERC in late June — with substantial completion expected August or September 2026. Once complete, the seven-train expansion will add over 10 MTPA to bring Corpus Christi\'s total capacity above 25 MTPA.',
  },
  {
    title: 'Golden Pass LNG (TX)',
    body: 'Train 1 has shipped three cargoes but remains volatile: feedgas fell near zero on June 29 following flaring issues under investigation with Texas regulators, after peaking at nearly 600 MMcf/d on June 23. FERC approved Train 2 systems commissioning on June 25, 2026. Train 2 first LNG is expected in H1 2027. Train 3 construction and commissioning continues in parallel.',
  },
  {
    title: 'LNG Canada (BC)',
    body: 'Both trains are now operational. Train 1 shipped its first cargo in June 2025 and Train 2 commenced production in November 2025. As of February 2026 the facility had shipped 50 cargoes. FID on Phase 2 — which would double capacity to 28 MTPA — is expected during 2026, with the March 2026 Coastal GasLink cooperation agreement supporting the expansion pipeline case.',
  },
  {
    title: 'DOE Export Approvals',
    body: 'Plaquemines LNG and Elba Island LNG received DOE approval in March and April 2026 to increase permitted exports by 0.5 Bcf/d and 0.1 Bcf/d respectively, expanding the regulatory runway for Gulf Coast export infrastructure.',
  },
];

const industrialDevelopments = [
  {
    title: 'Data Centre & AI Buildout',
    body: 'Goldman Sachs projects total hyperscaler capex from 2025 through 2027 will reach $1.15 trillion, more than double prior levels. U.S. data centre construction spending reached a monthly rate of $45.1 billion by December 2025, up 85% from two years prior.',
  },
  {
    title: 'Semiconductors & Compute',
    body: 'Elon Musk has proposed “Terafab” centred in Austin, which could ultimately support 1 terawatt of compute capacity annually. TSMC continues its Arizona ramp, with facilities expected to create 6,000 direct jobs alongside wider construction and supply chain employment.',
  },
  {
    title: 'Capital Power Genesee (AB)',
    body: 'The Government of Canada relaxed environmental standards paving the way for Capital Power to expand its 1,857 MW Genesee site, which could accommodate a 1,000 MW, 1-million-square-foot hyperscale data centre.',
  },
];

const newProjects = [
  {
    title: 'Alaska LNG (Glenfarne)',
    body: 'Proposed 20 Mt/y export plant in Nikiski. Pipeline FID anticipated late 2025 remains pending. Glenfarne has enlisted Worley ahead of the FID. One to watch as U.S. export policy continues to favour new capacity.',
  },
  {
    title: 'Penzance High Impact Intelligence Center (WV)',
    body: '$4 billion campus in Berkeley County, West Virginia, delivering 600 MW of IT capacity.',
  },
  {
    title: 'Rio Bravo Pipeline (TX)',
    body: '138-mile pipeline with capacity up to 4.5 Bcf/d delivering feedgas to NextDecade\'s Rio Grande LNG terminal.',
  },
  {
    title: 'Williams Southeast Supply Enhancement (VA)',
    body: '1.6 Bcf/d expansion of the Transcontinental Pipeline expected online in 2027, underpinning feedgas supply to Gulf Coast and Southeast demand centres.',
  },
  {
    title: 'Corpus Christi Stage 4 (TX)',
    body: 'Cheniere filed a FERC application in February 2026 for four large-scale trains adding ~24 MTPA. First commissioning is estimated early 2032. Represents the next major EPC wave at the Corpus Christi complex.',
  },
];

const arbiterApplications = [
  {
    type: 'LNG Facilities',
    detail: 'Golden Pass, Corpus Christi, Woodfibre, Cedar, Port Arthur, Rio Grande',
    application: 'Multi-discipline handover packages; punch and ITR management across large piping, rotating equipment, and controls scopes; train-by-train commissioning progress tracking; regulatory closeout documentation.',
  },
  {
    type: 'Data Centres & Semiconductor Fabs',
    detail: 'Terafab, TSMC Arizona, Penzance',
    application: 'Commissioning management for electrical, mechanical, and controls systems across multiple halls and phases; structured ITR workflows; live C&E tracking.',
  },
  {
    type: 'Nuclear & Power',
    detail: 'Darlington SMR, TerraPower Natrium, Capital Power Genesee',
    application: 'Safety-critical ITR control; system-by-system energisation tracking; interface management between EPCs and owner operators; licence-to-operate documentation support.',
  },
  {
    type: 'Pipelines & Gas Infrastructure',
    detail: 'Rio Bravo, Williams Southeast, Commonwealth LNG',
    application: 'Construction completion tracking for linear scopes; hydro-test and pre-commissioning records; streamlined handover packages for operations teams.',
  },
];

export default function NorthAmericaProjectIntelligencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-[#0d2b06] py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/learn/news" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium mb-6 transition-colors">
              ← News & Insights
            </Link>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">Market Briefing</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              North America Market Intelligence Briefing
            </h1>
            <p className="text-[#6dc744] font-semibold text-lg mb-4">LNG, Data Centre, Semiconductor &amp; Power Sectors</p>
            <p className="text-white/55 text-sm">Issue Date: June 30, 2026 &nbsp;·&nbsp; Coverage: North America &nbsp;·&nbsp; 8 min read</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80"
              alt="Industrial energy infrastructure at dusk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12 text-arbiter-muted text-base leading-relaxed">

          {/* Market Pulse */}
          <section className="space-y-5">
            <div>
              <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-2">Overview</p>
              <h2 className="text-2xl font-bold text-arbiter-dark">Market Pulse</h2>
            </div>
            <p>
              The North American construction landscape is defined by a Gulf Coast LNG mega-wave colliding with an
              unprecedented AI data-centre and semiconductor buildout. With Corpus Christi Stage 3 nearing full
              completion, Golden Pass LNG commissioning its first train and beginning Train 2 systems commissioning,
              and LNG Canada&apos;s two trains now both operational and ramping, 2026 marks the inflection point for
              North American LNG export capacity. Simultaneously, over 670 hyperscale projects are in the global
              pipeline with approximately 35 GW of capacity currently under construction in North America alone.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5 text-center">
                  <div className="text-2xl lg:text-[1.75rem] font-extrabold text-arbiter-green leading-none mb-2">{stat.value}</div>
                  <div className="text-[11px] text-arbiter-muted leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Energy Developments */}
          <section className="space-y-5">
            <div>
              <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-2">Energy</p>
              <h2 className="text-2xl font-bold text-arbiter-dark">Key Energy Developments</h2>
            </div>
            <div className="space-y-4">
              {energyDevelopments.map((item) => (
                <div key={item.title} className="border-l-2 border-arbiter-green bg-arbiter-gray-bg rounded-r-xl p-5">
                  <h3 className="font-bold text-arbiter-dark text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-arbiter-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Industrial Developments */}
          <section className="space-y-5">
            <div>
              <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-2">Industrial</p>
              <h2 className="text-2xl font-bold text-arbiter-dark">Key Industrial Developments</h2>
            </div>
            <div className="space-y-4">
              {industrialDevelopments.map((item) => (
                <div key={item.title} className="border-l-2 border-arbiter-green bg-arbiter-gray-bg rounded-r-xl p-5">
                  <h3 className="font-bold text-arbiter-dark text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-arbiter-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* EPC & Contract Awards */}
          <section className="space-y-5">
            <div>
              <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-2">Contracts</p>
              <h2 className="text-2xl font-bold text-arbiter-dark">EPC &amp; Contract Awards</h2>
            </div>
            <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-6 space-y-5">
              <div>
                <h3 className="font-bold text-arbiter-dark text-sm mb-2">Darlington SMR Supply Chain</h3>
                <ul className="space-y-1.5 text-sm">
                  {[
                    'Walters Group — $44.5M structural steel award',
                    'Marmon Industrial Water — $17.8M condensate purification package',
                    'Tractel — $9.9M reactor building weather enclosure',
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-arbiter-green flex-shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-arbiter-dark text-sm mb-2">LNG EPC</h3>
                <ul className="space-y-1.5 text-sm">
                  {[
                    'McDermott is executing Woodfibre LNG, one of the company\'s most significant onshore energy projects in North America, with an EPC value exceeding USD 500M.',
                    'Bechtel remains the lead LNG EPC globally, having delivered or actively executing Sabine Pass, Corpus Christi Stages 3 & 4, Driftwood, Rio Grande, and Port Arthur LNG.',
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-arbiter-green flex-shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* New Projects to Track */}
          <section className="space-y-5">
            <div>
              <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-2">New Entries</p>
              <h2 className="text-2xl font-bold text-arbiter-dark">New Projects to Track</h2>
            </div>
            <div className="space-y-4">
              {newProjects.map((item) => (
                <div key={item.title} className="border-l-2 border-arbiter-green bg-arbiter-gray-bg rounded-r-xl p-5">
                  <h3 className="font-bold text-arbiter-dark text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-arbiter-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-arbiter-muted">
              Briefing reflects sources current to June 30, 2026. Golden Pass Train 1 ramp-up remains volatile —
              recommend validating feedgas and commissioning status directly with site teams before engagement.
            </p>
          </section>

          {/* Where Arbiter Fits In */}
          <section className="space-y-5">
            <div>
              <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-2">About Arbiter</p>
              <h2 className="text-2xl font-bold text-arbiter-dark">Where Arbiter Fits In</h2>
            </div>
            <p>
              Every project listed in this briefing shares a common challenge: keeping complex, multi-discipline
              scopes organised, accountable, and on track from first construction activity through to final handover.
              That&apos;s exactly where Arbiter operates. As project scale and complexity grows across LNG facilities,
              data centres, semiconductor fabs, pipelines, power generation, and nuclear, the demand for structured,
              software-driven project controls has never been higher.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: 'Construction Controls', body: 'Arbiter tracks every punch item, ITR, and work package from first-fix through mechanical completion, giving project teams a single source of truth across multi-discipline scopes.' },
                { title: 'Pre-Commissioning & Commissioning', body: 'Structured subsystem walkdowns, loop checks, and energisation sequencing managed in one platform — reducing rework and keeping complex systems aligned to schedule.' },
                { title: 'Handover & Turnover', body: 'Automated, auditable handover documentation reduces the time and risk of transferring complex facilities to operations, regardless of sector or project size.' },
              ].map((card) => (
                <div key={card.title} className="bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5">
                  <h3 className="font-bold text-arbiter-dark text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-arbiter-muted leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-arbiter-dark text-base mb-3">How Arbiter Applies Across This Briefing</h3>
              <div className="overflow-hidden border border-arbiter-border rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-arbiter-green text-white">
                      <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">Project Type</th>
                      <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">Arbiter Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arbiterApplications.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-arbiter-gray-bg'}>
                        <td className="px-4 py-3 align-top">
                          <span className="font-bold text-arbiter-dark block">{row.type}</span>
                          <span className="text-xs text-arbiter-muted">{row.detail}</span>
                        </td>
                        <td className="px-4 py-3 align-top text-arbiter-muted">{row.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              As North America&apos;s project pipeline accelerates through 2026–2027, owners and EPCs are under
              increasing pressure to deliver on schedule across some of the most complex capital projects ever built.
              Arbiter provides the project controls software infrastructure that turns complexity into a controlled,
              transparent process — from first construction activity through to final handover.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#0d2b06] rounded-2xl px-8 py-8 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="font-bold text-white text-base mb-1">Ready to see Arbiter in action?</div>
              <div className="text-sm text-white/60">Arrange a platform walkthrough tailored to your project type and scope.</div>
            </div>
            <a href="/#contact" className="relative flex-shrink-0 inline-flex items-center gap-2 bg-arbiter-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-arbiter-green-dark transition-colors">
              Schedule a Demo
            </a>
          </div>

          <p className="text-[11px] text-arbiter-muted/70 leading-relaxed border-t border-arbiter-border pt-6">
            This briefing is prepared by Arbiter Completions &amp; Controls for internal and client use. Information is
            compiled from publicly available sources as at June 30, 2026 and is provided for situational awareness
            purposes only.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PitfallsOfExcelPage() {
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
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">Insight</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              The Pitfalls of Project Scheduling in Excel
            </h1>
            <p className="text-[#6dc744] font-semibold text-lg mb-4">Why Accuracy Takes a Hit</p>
            <p className="text-white/55 text-sm">5 min read</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&auto=format&fit=crop&q=80"
              alt="Spreadsheets on a laptop screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8 text-arbiter-muted text-base leading-relaxed">

          <p>
            In the world of project management, accurate scheduling stands as a cornerstone for
            success. However, when relying solely on Excel spreadsheets for scheduling, a myriad of
            challenges can lead to inaccuracies that affect project timelines and outcomes.
          </p>

          <div>
            <h2 className="text-xl font-bold text-arbiter-dark mb-3">
              Manual Data Entry and Formula Errors
            </h2>
            <p>
              In Excel, project schedules often rely on manually entering data and creating formulas
              to calculate task durations, dependencies, and resource allocations. However, human
              error is inevitable. Even a small mistake in data entry or formula creation can lead
              to substantial inaccuracies.
            </p>
            <p className="mt-4">
              For instance, a misplaced date or an incorrect formula referencing can skew the entire
              schedule, causing tasks to start at the wrong time or creating unrealistic deadlines.
            </p>
          </div>

          {/* Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Small mistakes in manual data entry can lead to substantial inaccuracies.</strong> A single misreferenced cell in a complex schedule can cascade into days or weeks of misaligned task dependencies.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop&q=80"
              alt="Team reviewing project schedule"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-arbiter-dark mb-3">The Knock-On Effect</h2>
            <p>
              Scheduling errors in Excel rarely stay contained. A single miscalculation on a critical
              path task propagates through every dependent activity, distorting resource plans,
              procurement lead times, and milestone commitments. By the time the error is discovered,
              the project team is often already behind.
            </p>
            <p className="mt-4">
              This is compounded by version control issues. When multiple stakeholders work from
              different copies of a schedule, reconciling changes becomes a project in itself. There
              is no single source of truth, no live update, and no audit trail showing who changed
              what and when.
            </p>
          </div>

          {/* Pull quote */}
          <div className="bg-[#0d2b06] rounded-2xl px-8 py-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="text-[#6dc744] text-5xl font-serif leading-none mb-3 opacity-60">"</div>
              <p className="text-white text-lg font-medium italic leading-snug">
                A gantt chart or project schedule only brings you so far. Without clear, granular measurements and expectations you don't really see the full workflow or project.
              </p>
              <p className="text-white/45 text-sm mt-4 font-medium">Dennis Killoran, Founder, Arbiter</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-arbiter-dark mb-4">A Better Approach</h2>
            <div className="space-y-4">
              {[
                { title: 'Live Schedule Updates', body: 'Purpose-built completions platforms update progress in real time as field crews complete tasks, eliminating the delay between work done and schedule reflected.' },
                { title: 'Single Source of Truth', body: 'All stakeholders see the same data simultaneously, removing the version conflict problem that plagues spreadsheet-based workflows.' },
                { title: 'Full Audit Trail', body: 'Every change, comment, and completion is timestamped and attributed, providing accountability that Excel simply cannot offer.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-arbiter-green/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-arbiter-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-arbiter-dark text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-arbiter-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <div className="font-bold text-arbiter-dark text-sm mb-1">Replace spreadsheets with Arbiter</div>
              <div className="text-xs text-arbiter-muted">See how real-time digital control changes the game.</div>
            </div>
            <a href="/#contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-arbiter-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-arbiter-green-dark transition-colors">
              Schedule a Demo
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

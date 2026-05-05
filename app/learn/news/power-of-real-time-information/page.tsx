import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PowerOfRealTimeInfoPage() {
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
              The Power of Real-Time Information
            </h1>
            <p className="text-[#6dc744] font-semibold text-lg mb-4">Enhancing Project Success through Live Updates</p>
            <p className="text-white/55 text-sm">4 min read</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
              alt="Real-time project data on screens"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8 text-arbiter-muted text-base leading-relaxed">

          <p>
            In today's fast-paced and interconnected business landscape, successful project management
            relies heavily on the continuous flow of information and the ability to adapt swiftly to
            changes. Live project updates serve as a cornerstone in this process, offering real-time
            insights that can significantly impact the outcome and success of a project.
          </p>

          <div>
            <h2 className="text-xl font-bold text-arbiter-dark mb-3">
              Real-Time Insights: The Foundation of Efficient Decision-Making
            </h2>
            <p>
              Live project updates provide stakeholders, team members, and project managers with
              instant access to critical information. This access empowers decision-makers to assess
              progress, identify potential bottlenecks, and make informed decisions promptly.
            </p>
          </div>

          {/* Inline graphic */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80"
              alt="Dashboard and reporting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Three benefits */}
          <div className="space-y-5">
            {[
              {
                title: 'Quick Problem Identification',
                body: 'Timely updates help in spotting issues as they arise, allowing teams to address them before they escalate, thereby preventing potential setbacks.',
              },
              {
                title: 'Agile Decision-Making',
                body: 'With up-to-date information at their disposal, managers can pivot strategies, allocate resources effectively, and adapt to changing circumstances promptly.',
              },
              {
                title: 'Enhanced Communication',
                body: 'Live updates foster transparent communication among team members, enabling better collaboration and alignment toward project goals.',
              },
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

          {/* Pull quote */}
          <div className="bg-[#0d2b06] rounded-2xl px-8 py-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="text-[#6dc744] text-5xl font-serif leading-none mb-3 opacity-60">"</div>
              <p className="text-white text-lg font-medium italic leading-snug">
                Live project updates provide stakeholders with access to critical information — the difference between a reactive team and a proactive one.
              </p>
            </div>
          </div>

          <p>
            For professionals managing intricate capital construction projects, the ability to see
            what is happening across a job site in real time is no longer a luxury. It is the
            baseline expectation of owners, operators, and regulators alike. Platforms built around
            live reporting — like Arbiter — eliminate the lag between what happens in the field and
            what leadership sees, making the entire project more responsive and accountable.
          </p>

          {/* CTA */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <div className="font-bold text-arbiter-dark text-sm mb-1">See real-time reporting in action</div>
              <div className="text-xs text-arbiter-muted">Book a 30-minute demo with our completions team.</div>
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

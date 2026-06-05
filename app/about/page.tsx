import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="relative w-full h-[55vh] min-h-[380px] pt-16">
          <Image
            src="/oil-facility.webp"
            alt="Oil facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b06]/40 via-transparent to-[#0d2b06]/70" />
          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-3">About Arbiter</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              For the Field,<br />From the Field
            </h1>
          </div>
        </div>

        {/* Body content */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

            {/* Intro paragraphs */}
            <div className="prose-section space-y-6 mb-16">
              <p className="text-lg text-arbiter-muted leading-relaxed">
                Arbiter's lineage is rooted not in a sterile lab but in the grit of Field-Observed
                innovation, a development philosophy in which software is forged through direct
                observation of real-world friction. Instead of engineers guessing what a professional
                needs, the platform was built by identifying the granular, often invisible obstacles
                that stall high-stakes projects. This "boots on the ground" origin is critical because
                complex workflows rarely follow a linear path; they are messy, unpredictable, and
                subject to sudden shifts.
              </p>
              <p className="text-lg text-arbiter-muted leading-relaxed">
                By prioritizing actual user behavior over theoretical models, Arbiter ensures that
                its features solve practical pain points rather than just adding digital clutter. For
                professionals managing intricate systems, this distinction is the difference between
                a tool that feels like a burden and one that acts as a force multiplier.
              </p>
            </div>

            {/* Dennis Killoran quote */}
            <div className="relative bg-[#0d2b06] rounded-2xl px-8 py-10 mb-16 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative">
                <div className="text-[#6dc744] text-6xl font-serif leading-none mb-4 opacity-60">"</div>
                <blockquote className="text-white text-xl sm:text-2xl font-medium leading-snug italic mb-8">
                  A gantt chart, or project schedule only brings you so far. Without clear, granular
                  measurements and expectations you don't really see the full workflow or project.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-px h-10 bg-[#6dc744]/40" />
                  <div>
                    <div className="text-white font-bold text-sm">Dennis Killoran</div>
                    <div className="text-white/50 text-xs mt-0.5">Founder and Industry Leader</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Field-Driven Design Matters */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-arbiter-dark tracking-tight mb-8">
                Why Field-Driven Design Matters
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: 'Intuitive Logic',
                    body: 'The interface mirrors the natural mental models of the people doing the work, reducing the cognitive load required to navigate the system.',
                  },
                  {
                    title: 'Edge Case Resilience',
                    body: 'Because it originated from observation, the software is built to handle the "unplanned" scenarios that purely theoretical software often ignores.',
                  },
                  {
                    title: 'Zero-Waste Features',
                    body: "Every update is a response to a documented necessity, ensuring the platform remains lean, fast, and hyper-relevant to the industry's demands.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="mt-1 w-5 h-5 rounded-full bg-arbiter-green/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-arbiter-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-arbiter-dark text-base mb-1">{item.title}</h3>
                      <p className="text-arbiter-muted text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

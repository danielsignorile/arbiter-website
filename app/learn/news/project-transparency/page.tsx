import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectTransparencyPage() {
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              3 Reasons Why Project Transparency Is Vital for Your Company's Success
            </h1>
            <p className="text-white/55 text-sm">6 min read</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
              alt="Team collaborating on a project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8 text-arbiter-muted text-base leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-arbiter-dark mb-3">What Is Project Transparency?</h2>
            <p>
              The word transparency can be defined as "the quality of being done in an open way
              without secrets." In the realm of projects and processes, it means managing a project
              in which all team members can access all relevant information easily and efficiently.
            </p>
            <p className="mt-4">
              In the project world it means that employees have easy and quick access to project
              documentation and information necessary to complete their tasks. At the same time,
              leads have an accurate and real-time understanding of the work completion status
              within the project. For that reason project transparency leads to better outcomes
              for both the team and the project itself.
            </p>
          </div>

          {/* Conditions callout */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-arbiter-dark">A project becomes transparent when:</h3>
            {[
              'Teams can easily access and work with project data, no matter where they are located or when they try to access it.',
              'There is assurance that data is accurate and provided by the official source.',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-arbiter-muted">
                <div className="mt-1 w-4 h-4 rounded-full bg-arbiter-green/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-arbiter-green" />
                </div>
                {item}
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-bold text-arbiter-dark mb-4">Transparency has a positive impact on a project through:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {['Improved understanding of the project', 'Enhanced team productivity', 'Increased accountability', 'Smooth communications'].map((b) => (
                <div key={b} className="flex items-center gap-2.5 bg-arbiter-green/5 border border-arbiter-green/15 rounded-xl px-4 py-3 text-sm text-arbiter-dark font-medium">
                  <div className="w-2 h-2 rounded-full bg-arbiter-green flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop&q=80"
              alt="Team accessing project information"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Reason 1 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-arbiter-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <h2 className="text-xl font-bold text-arbiter-dark">Having project-related information at your fingertips saves time.</h2>
            </div>
            <p>
              When it comes to pushing projects forward and making progress, all team members must
              have access to the information they need to effectively complete tasks.
            </p>
            <p className="mt-4">
              For instance, if team members uncover an issue and need project-related information
              for guidance, good project transparency will ensure they have this information at their
              fingertips. The last thing you want is for these team members to start contacting other
              employees in search of the relevant information needed to successfully complete their tasks.
            </p>
            <div className="mt-5 bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5">
              <p className="text-sm font-semibold text-arbiter-dark mb-1">The solution</p>
              <p className="text-sm text-arbiter-muted leading-relaxed">
                A centralized digital system to store information relevant to a project. With
                everything in one place, team members can quickly access information without slowing
                down their workflows or disrupting others. A project completions platform can store
                all project-related documentation and assign it to specific objects or systems.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8]">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&auto=format&fit=crop&q=80"
              alt="Digital files and documents"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Reason 2 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-arbiter-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <h2 className="text-xl font-bold text-arbiter-dark">Having access to the necessary information simplifies the workflow.</h2>
            </div>
            <p>
              Project transparency means sharing project data between team members through
              facilitating information flow distribution across all management levels throughout
              the project lifecycle.
            </p>
            <p className="mt-4">
              A team member that does not have properly organized access to project documents will
              find it challenging to get the information they need. For instance, if an electrician
              is in search of a specific wiring diagram, it will take considerable time going through
              all wiring diagrams of the project to find exactly the one needed.
            </p>
            <div className="mt-5 bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5">
              <p className="text-sm font-semibold text-arbiter-dark mb-1">The solution</p>
              <p className="text-sm text-arbiter-muted leading-relaxed">
                A project completion platform that not only stores project-related documentation,
                but assigns this documentation to be accessible exactly where and when it is needed.
                That way team members can access all relevant documentation when doing their checks
                or tasks, with a simple click of a button, and will only get information that is
                relevant to them at that given moment.
              </p>
            </div>
          </div>

          {/* Reason 3 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-arbiter-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <h2 className="text-xl font-bold text-arbiter-dark">Project transparency allows your leads to easily access real-time project statuses and reports.</h2>
            </div>
            <p>
              Successful projects are always a result of good planning, scheduling, and reporting.
              And it is hard to do one without another.
            </p>
            <p className="mt-4">
              If your company cannot track its project progress due to inaccurate reporting, your
              leads will have a hard time planning the next project stage. Without accurate planning,
              the scheduling of teams, employees, and resources will not be accurate, creating
              delays and overruns, especially when project deficiencies have to be taken care of.
            </p>
            <div className="mt-5 bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5">
              <p className="text-sm font-semibold text-arbiter-dark mb-1">The solution</p>
              <p className="text-sm text-arbiter-muted leading-relaxed">
                With a transparent project, your leads will always have their finger on the pulse
                of the project. They will know the exact project status and be able to plan and
                schedule ahead, minimizing the risk of delays. A project completions platform
                offers real-time project progress available to anyone in the organization, anywhere
                in the world. Upon work completion, the platform automatically updates the
                information in the system.
              </p>
            </div>
          </div>

          {/* Final image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8]">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80"
              alt="Project reporting dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CTA */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <div className="font-bold text-arbiter-dark text-sm mb-1">Build transparency into your next project</div>
              <div className="text-xs text-arbiter-muted">See how Arbiter gives every stakeholder a single source of truth.</div>
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

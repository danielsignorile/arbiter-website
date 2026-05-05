import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IPCBlackrodPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-[#0d2b06] py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/learn/case-studies" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium mb-6 transition-colors">
              ← Case Studies
            </Link>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4">
              Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              IPC Blackrod SAGD: Vendor Accountability Enforced Pre-Startup
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              How Arbiter's digital check sheet system caught a critical flame detector discrepancy before first fire and compiled the full audit trail instantly.
            </p>
          </div>
        </div>

        {/* Meta bar */}
        <div className="bg-white border-b border-arbiter-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <Image src="/ipc-logo.avif" alt="IPC" width={80} height={32} className="h-8 w-auto object-contain grayscale opacity-70" />
            </div>
            <div className="h-4 w-px bg-arbiter-border" />
            <span className="text-xs text-arbiter-muted font-medium">Energy · SAGD · Alberta</span>
            <div className="h-4 w-px bg-arbiter-border" />
            <span className="text-xs text-arbiter-muted font-medium">5 min read</span>
            <div className="ml-auto">
              <a
                href="/ipc-blackrod-case-study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-arbiter-green text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-arbiter-green-dark transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&auto=format&fit=crop&q=80"
              alt="Oil sands facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

          {/* Overview */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7 mb-10">
            <h2 className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">Project Overview</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { label: 'Client', value: 'IPC (International Petroleum Corp.)' },
                { label: 'Project', value: 'Blackrod SAGD Phase 1' },
                { label: 'Sector', value: 'Oil Sands, Alberta' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs text-arbiter-muted font-medium mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-arbiter-dark">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-7 text-arbiter-muted text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-arbiter-dark mb-3">The Challenge</h2>
              <p>
                At the IPC Blackrod SAGD facility in northern Alberta, the commissioning team faced
                a challenge common to large capital projects: ensuring that hundreds of vendor-supplied
                instruments and safety devices were installed, verified, and documented correctly before
                first startup. With paper-based check sheets, discrepancies could go undetected until
                they became costly and potentially dangerous problems.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/8]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop&q=80"
                alt="Field commissioning work"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-arbiter-dark mb-3">How Arbiter Was Applied</h2>
              <p>
                The team deployed Arbiter's SoftChecks across all flame detector verification
                workflows. Each instrument was tied to a digital check sheet that required photographic
                evidence, technician sign-off, and model-number verification against the approved
                instrument list.
              </p>
              <p className="mt-4">
                During a routine SoftCheck on a bank of flame detectors in the production facility,
                a technician flagged a model number that did not match the specification. The discrepancy
                was instantly logged as an Action, assigned to the responsible vendor, and escalated to
                the commissioning lead — all within the Arbiter platform.
              </p>
            </div>

            {/* Pull quote */}
            <div className="bg-[#0d2b06] rounded-2xl px-8 py-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              <div className="relative">
                <div className="text-[#6dc744] text-5xl font-serif leading-none mb-3 opacity-60">"</div>
                <p className="text-white text-lg font-medium italic leading-snug">
                  Without Arbiter, that discrepancy might not have surfaced until after first fire.
                  The digital trail gave us the proof we needed to hold the vendor accountable on the spot.
                </p>
                <p className="text-white/45 text-sm mt-4 font-medium">Commissioning Lead, IPC Blackrod</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-arbiter-dark mb-3">The Outcome</h2>
              <p>
                The vendor was required to replace the incorrect units before the startup sequence
                could proceed. Because Arbiter captured the full timeline — detection, assignment,
                rectification, and re-verification — the project team had a complete, timestamped
                audit trail ready for the regulatory review.
              </p>
              <p className="mt-4">
                At project handover, the Dossier feature auto-compiled every check sheet, action,
                and attached document into a single digital turnover package, delivered to the client
                in hours rather than weeks.
              </p>
            </div>

            {/* Results */}
            <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7">
              <h2 className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-5">Results</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { value: '1', label: 'Critical safety discrepancy caught pre-startup' },
                  { value: '100%', label: 'Audit trail compiled at handover' },
                  { value: 'Hours', label: 'To generate complete turnover package' },
                ].map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="text-3xl font-extrabold text-arbiter-green mb-1">{r.value}</div>
                    <div className="text-xs text-arbiter-muted leading-snug">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-arbiter-dark mb-3">Download the Full Case Study</h2>
              <p>
                The full IPC Blackrod case study PDF contains additional detail on workflow configuration,
                the commissioning team structure, and recommendations for applying the same approach to
                similar SAGD projects.
              </p>
              <a
                href="/ipc-blackrod-case-study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-arbiter-green text-white font-semibold px-6 py-3 rounded-full hover:bg-arbiter-green-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF Case Study
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

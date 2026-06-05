'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useDemoModal } from '@/components/DemoModalContext';

const keyResults = [
  { value: '1', label: 'Critical deficiency caught before startup' },
  { value: '100%', label: 'Audit trail compiled instantly' },
  { value: '0', label: 'Delays to first fire schedule' },
];

const overview = [
  { label: 'Client', value: 'IPC (Inter Pipeline Corporation)' },
  { label: 'Project Type', value: 'SAGD Facility, Alberta Oil Sands' },
  { label: 'Scope', value: 'Pre-startup commissioning and vendor accountability' },
  { label: 'Result', value: 'Critical safety discrepancy identified and resolved before first fire' },
];

export default function IPCBlackrodSAGDPage() {
  const { openModal } = useDemoModal();

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <div className="bg-[#0d2b06] py-16 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '28px 28px' }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-arbiter-green/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/learn/case-studies"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium mb-6 transition-colors"
            >
              ← Back to Case Studies
            </Link>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4">
              Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              IPC Blackrod SAGD: Vendor Accountability Enforced Pre-Startup
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              How Arbiter's digital check sheet system caught a critical flame detector discrepancy
              before first fire, and compiled the full audit trail instantly.
            </p>
          </div>
        </div>

        {/* Meta bar */}
        <div className="bg-white border-b border-arbiter-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center gap-5">
            <Image
              src="/ipc-logo.avif"
              alt="IPC"
              width={80}
              height={32}
              className="h-8 w-auto object-contain grayscale opacity-60"
            />
            <div className="h-4 w-px bg-arbiter-border" />
            <span className="text-xs text-arbiter-muted font-medium">Energy · SAGD · Alberta Oil Sands</span>
            <div className="h-4 w-px bg-arbiter-border" />
            <span className="text-xs text-arbiter-muted font-medium">Pre-startup Commissioning</span>
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

        {/* Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

          {/* Project overview */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7">
            <h2 className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-5">Project Overview</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {overview.map((item) => (
                <div key={item.label}>
                  <div className="text-xs text-arbiter-muted font-medium mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-arbiter-dark">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-extrabold text-arbiter-dark mb-4">The Challenge</h2>
            <p className="text-arbiter-muted text-base leading-relaxed">
              In the final weeks before startup on the Blackrod SAGD facility, IPC's commissioning
              team faced a familiar but high-stakes problem: dozens of vendors, hundreds of check
              sheets, and no reliable way to verify that every item had been inspected, signed off,
              and traced back to the responsible party. Paper-based processes made it nearly
              impossible to identify gaps before they became startup liabilities.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-extrabold text-arbiter-dark mb-4">How Arbiter Was Used</h2>
            <p className="text-arbiter-muted text-base leading-relaxed">
              Arbiter's SoftChecks module was deployed across the full commissioning scope, replacing
              paper check sheets with mobile-capable digital forms that worked offline in the field.
              Every check sheet was tied to a vendor, a tag number, and a responsible inspector.
              Actions and Deficiencies were logged in real time, automatically assigned, and tracked
              to closure. The Dossier module compiled the full audit trail on demand.
            </p>
          </div>

          {/* Outcome */}
          <div>
            <h2 className="text-2xl font-extrabold text-arbiter-dark mb-4">The Outcome</h2>
            <p className="text-arbiter-muted text-base leading-relaxed">
              During a final pre-startup walkdown, Arbiter's system flagged a flame detector
              discrepancy that had not been signed off by the responsible vendor. The issue was
              identified, escalated, and resolved before first fire. The full audit trail,
              including who inspected, when, and what action was taken, was compiled instantly
              for the client's records. What would have taken days of manual document retrieval
              took minutes.
            </p>
          </div>

          {/* Key results */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7">
            <h2 className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-6">Key Results</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {keyResults.map((r) => (
                <div key={r.label} className="text-center">
                  <div className="text-4xl font-extrabold text-arbiter-green mb-2">{r.value}</div>
                  <div className="text-xs text-arbiter-muted leading-snug font-medium">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#0d2b06] rounded-2xl px-8 py-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '24px 24px' }}
            />
            <div className="relative">
              <div className="text-[#6dc744] text-5xl font-serif leading-none mb-4 opacity-60">"</div>
              <p className="text-white text-lg font-medium italic leading-snug max-w-2xl">
                Arbiter gave us the visibility we needed in the final stretch. Every vendor action
                was tracked, every discrepancy was flagged, and when we needed the audit trail it
                was ready in minutes, not days.
              </p>
              <p className="text-white/45 text-sm mt-5 font-medium">
                Commissioning Manager, IPC Blackrod SAGD Project
              </p>
            </div>
          </div>

        </article>

        {/* CTA */}
        <div className="bg-[#0d0d0d] py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-arbiter-green/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              See Arbiter on Your Next Project
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Book a 30-minute demo with our completions team and see how Arbiter performs on your project type.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-arbiter-green text-white font-semibold px-8 py-4 rounded-full hover:bg-arbiter-green-dark transition-all duration-200 shadow-xl shadow-arbiter-green/25 hover:-translate-y-0.5"
            >
              Schedule A Demo
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

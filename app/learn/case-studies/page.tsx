import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-[#0d2b06] py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/learn" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium mb-6 transition-colors">
              ← Learn
            </Link>
            <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-3">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Real Projects. Real Results.</h1>
          </div>
        </div>

        <div className="bg-arbiter-gray-bg py-16 min-h-[50vh]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/learn/case-studies/ipc-blackrod"
              className="group flex flex-col sm:flex-row gap-6 bg-white border border-arbiter-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="sm:w-64 sm:flex-shrink-0 aspect-video sm:aspect-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80"
                  alt="IPC Blackrod SAGD"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200 w-fit mb-3">Case Study</span>
                <h2 className="font-bold text-arbiter-dark text-lg leading-snug mb-2 group-hover:text-arbiter-green transition-colors">
                  IPC Blackrod SAGD: Vendor Accountability Enforced Pre-Startup
                </h2>
                <p className="text-sm text-arbiter-muted leading-relaxed mb-4">
                  How Arbiter's digital check sheet system caught a critical flame detector discrepancy before first fire and compiled the full audit trail instantly.
                </p>
                <div className="flex items-center gap-1.5 text-arbiter-green text-sm font-semibold">
                  Read case study <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

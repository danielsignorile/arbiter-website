'use client';

import { ArrowRight } from 'lucide-react';
import { useDemoModal } from './DemoModalContext';

export default function CTABanner() {
  const { openModal } = useDemoModal();

  return (
    <section id="demo" className="py-20 lg:py-28 bg-[#0d0d0d] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-arbiter-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-5">
          Get Started
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          Get set up in minutes
        </h2>
        <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
          See how Arbiter performs on your project type. Book a 30-minute demo with our
          completions team and make it easier to manage your next capital project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-arbiter-green text-white font-semibold px-8 py-4 rounded-full hover:bg-arbiter-green-dark transition-all duration-200 shadow-xl shadow-arbiter-green/25 hover:-translate-y-0.5 hover:shadow-arbiter-green/35"
          >
            Schedule A Demo
            <ArrowRight size={16} />
          </button>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white/60 font-medium hover:text-white transition-colors text-sm"
          >
            Our History
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

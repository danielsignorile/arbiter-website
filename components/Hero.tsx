'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useDemoModal } from './DemoModalContext';

// `suffix` is appended to the counting number. When `suffixInstant` is true the
// suffix shows as soon as the animation starts (e.g. "+"); when false it only
// appears once the number reaches its target (the "–95%" of "80–95%").
const stats = [
  { target: 300, suffix: '+', suffixInstant: true, label: 'Projects' },
  { target: 80, suffix: '–95%', suffixInstant: false, label: 'On Budget & Schedule' },
  { target: 15, suffix: '+', suffixInstant: true, label: 'Years Field Refinement' },
];

const DURATION = 2000;
// Starts fast, slows near the end.
const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

export default function Hero() {
  const { openModal } = useDemoModal();
  const statsRef = useRef<HTMLDListElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  // Trigger once when the stats bar scrolls into view.
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Count every number up from 0 to its target over DURATION with easing.
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    let startTime: number | null = null;
    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const p = Math.min((now - startTime) / DURATION, 1);
      const eased = easeOutCubic(p);
      setCounts(stats.map((s) => Math.round(s.target * eased)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <section className="relative flex flex-col min-h-[85vh] pt-16 overflow-hidden bg-[#0d2b06]">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-arbiter-green/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-arbiter-green/10 rounded-full blur-3xl translate-y-1/3" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold text-white leading-[1.05] tracking-tight text-balance mb-6">
            Complete Every Project.{' '}
            <span className="text-[#6dc744]">On Time.</span>{' '}
            <span className="text-[#6dc744]">On Budget.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
            From construction walkdowns to asset handover, Arbiter provides real-time
            completions management built for the complexity of specialized capital projects.
          </p>

          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-arbiter-green text-white font-semibold px-8 py-3.5 rounded-full hover:bg-arbiter-green-dark transition-all duration-200 shadow-xl shadow-arbiter-green/30 hover:-translate-y-0.5"
            >
              Schedule A Demo
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <dl ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-white/15">
            {stats.map((stat, i) => {
              const reached = counts[i] >= stat.target;
              const showSuffix = stat.suffixInstant ? started : reached;
              return (
                <div key={stat.label} className="flex flex-col items-center sm:px-8 first:pl-0 last:pr-0">
                  <dt className="text-3xl font-extrabold text-white">
                    {counts[i]}
                    {showSuffix ? stat.suffix : ''}
                  </dt>
                  <dd className="text-sm text-white/50 mt-1 font-medium">{stat.label}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

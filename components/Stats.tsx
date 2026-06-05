'use client';

import { useEffect, useRef, useState } from 'react';

// `suffix` is appended to the counting number. When `suffixInstant` is true the
// suffix shows as soon as the animation starts (e.g. "+", "%"); when false it
// only appears once the number reaches its target (the "–95%" of "80–95%").
const stats = [
  { target: 300, suffix: '+', suffixInstant: true, label: 'Projects Completed' },
  { target: 80, suffix: '–95%', suffixInstant: false, label: 'On Budget & Schedule' },
  { target: 15, suffix: '+', suffixInstant: true, label: 'Years in the Field' },
  { target: 500, suffix: '', suffixInstant: true, label: 'Batch File Upload' },
];

const DURATION = 2000;
// Starts fast, slows near the end.
const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  // Trigger once when the stats grid scrolls into view.
  useEffect(() => {
    const node = gridRef.current;
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
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-arbiter-green tracking-[0.25em] uppercase mb-4">
          300+ Projects
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight mb-5">
          We are proud of the results our software has helped achieve
        </h2>
        <p className="text-lg text-arbiter-muted max-w-2xl mx-auto leading-relaxed">
          15 years of refinement, over 300 projects completed across energy, oil sands, mining
          and commercial construction.
        </p>

        <div ref={gridRef} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const reached = counts[i] >= stat.target;
            const showSuffix = stat.suffixInstant ? started : reached;
            return (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-4xl font-extrabold text-arbiter-green mb-2">
                  {counts[i]}
                  {showSuffix ? stat.suffix : ''}
                </div>
                <div className="text-sm text-arbiter-muted font-medium text-center leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

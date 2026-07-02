import Image from 'next/image';

const logos = [
  { src: '/logo-cenovus.svg', alt: 'Cenovus Energy', width: 140, height: 40 },
  { src: '/logo-spectra.png', alt: 'Spectra Energy', width: 140, height: 40 },
  { src: '/logo-williams.webp', alt: 'Williams', width: 140, height: 40 },
  { src: '/logo-voltagrid.jpeg', alt: 'Voltagrid', width: 140, height: 40 },
  { src: '/logo-sancon.png', alt: 'Sancon', width: 140, height: 40, imgClassName: 'max-h-14 scale-150' },
];

// Duplicate the set 4× so the loop stays gap-free across wide viewports.
// The marquee keyframe shifts by -25% (one set), so the strip is visually
// identical at the start and end of each cycle — a seamless infinite scroll.
const track = [...logos, ...logos, ...logos, ...logos];

export default function LogosBar() {
  return (
    <section className="py-12 bg-white border-b border-arbiter-border overflow-hidden">
      <p className="text-center text-xs font-bold text-arbiter-muted/50 tracking-[0.2em] uppercase mb-8">
        Trusted by Leading Project Teams
      </p>

      {/* Carousel wrapper, fades out at edges */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div className="group flex gap-16 w-max animate-marquee hover:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-9 w-36 flex-shrink-0 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`w-auto object-contain ${logo.imgClassName ?? 'max-h-9'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

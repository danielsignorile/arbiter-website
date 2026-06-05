import Image from 'next/image';

const logos = [
  { src: '/logo-cenovus.svg', alt: 'Cenovus Energy', width: 140, height: 40 },
  { src: '/logo-spectra.png', alt: 'Spectra Energy', width: 140, height: 40 },
  { src: '/logo-williams.webp', alt: 'Williams', width: 140, height: 40 },
  { src: '/logo-voltagrid.jpeg', alt: 'Voltagrid', width: 140, height: 40 },
];

// Duplicate for seamless loop
const track = [...logos, ...logos, ...logos];

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
        <div className="flex gap-16 w-max animate-marquee">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-10 w-36 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

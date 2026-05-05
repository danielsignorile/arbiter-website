import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

type Bullet = { title: string; body: string };
type Section = { heading: string; body: string[]; bullets?: Bullet[]; image?: string };

type Props = {
  title: string;
  subtitle: string;
  heroImage?: string;
  videoId?: string;
  sections: Section[];
  ctaLabel?: string;
};

export default function FeaturePageLayout({ title, subtitle, heroImage, videoId, sections, ctaLabel = 'See it in action' }: Props) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Dark hero */}
        <div className="bg-[#0d2b06] py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#features" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium mb-6 transition-colors">
              ← Platform Features
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {title}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          </div>
        </div>

        {/* Hero media: video or image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {videoId ? (
            <div className="rounded-2xl overflow-hidden aspect-video shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : heroImage ? (
            <div className="rounded-2xl overflow-hidden aspect-[16/7]">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="space-y-5">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold text-arbiter-dark">{section.heading}</h2>
              )}
              {section.body.map((para, j) => (
                <p key={j} className="text-base text-arbiter-muted leading-relaxed">{para}</p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <div className="space-y-3 mt-2">
                  {section.bullets.map((b, k) => (
                    b.title ? (
                      <div key={k} className="flex gap-4 bg-arbiter-gray-bg border border-arbiter-border rounded-xl p-5">
                        <div className="mt-1 w-5 h-5 rounded-full bg-arbiter-green/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-arbiter-green" />
                        </div>
                        <div>
                          <p className="font-semibold text-arbiter-dark text-sm mb-0.5">{b.title}</p>
                          {b.body && <p className="text-sm text-arbiter-muted leading-relaxed">{b.body}</p>}
                        </div>
                      </div>
                    ) : (
                      <div key={k} className="flex gap-3 text-sm text-arbiter-muted">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-arbiter-green flex-shrink-0" />
                        {b.body}
                      </div>
                    )
                  ))}
                </div>
              )}
              {section.image && (
                <div className="rounded-2xl overflow-hidden aspect-[16/8] mt-4">
                  <img src={section.image} alt={section.heading} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
          <div className="bg-arbiter-gray-bg border border-arbiter-border rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <div className="font-bold text-arbiter-dark text-sm mb-1">{ctaLabel}</div>
              <div className="text-xs text-arbiter-muted">Book a 30-minute demo with our completions team.</div>
            </div>
            <Link href="/#contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-arbiter-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-arbiter-green-dark transition-colors">
              Schedule a Demo <ArrowRight size={14} />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

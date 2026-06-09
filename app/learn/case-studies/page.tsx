import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base text-arbiter-muted leading-relaxed">
              New case studies are on the way. Check back soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

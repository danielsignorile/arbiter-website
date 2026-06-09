import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    tag: 'News & Insights',
    href: '/learn/news',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    title: 'The Power of Real-Time Information',
    desc: 'Live project updates serve as a cornerstone in project management, offering real-time insights that can significantly impact the outcome of a project.',
    readTime: '4 min read',
  },
];

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-[#0d2b06] py-20 lg:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #5aaf30 1px, transparent 0)`, backgroundSize: '28px 28px' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-4">Learn</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">Follow Along With Arbiter</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Insights, case studies, and resources from the field, to help you run better projects.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-arbiter-gray-bg py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-white border border-arbiter-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${s.tagColor}`}>{s.tag}</span>
                    <h2 className="font-bold text-arbiter-dark text-base leading-snug mt-3 mb-2 group-hover:text-arbiter-green transition-colors">{s.title}</h2>
                    <p className="text-xs text-arbiter-muted leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-arbiter-green text-xs font-semibold">
                      Browse {s.tag} <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

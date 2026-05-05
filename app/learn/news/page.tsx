import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    href: '/learn/news/power-of-real-time-information',
    title: 'The Power of Real-Time Information',
    subtitle: 'Enhancing Project Success through Live Updates',
    desc: 'In today\'s fast-paced landscape, live project updates serve as a cornerstone in project management, offering real-time insights that can significantly impact project outcomes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    readTime: '4 min read',
  },
  {
    href: '/learn/news/pitfalls-of-excel-scheduling',
    title: 'The Pitfalls of Project Scheduling in Excel',
    subtitle: 'Why Accuracy Takes a Hit',
    desc: 'When relying solely on Excel spreadsheets for project scheduling, a myriad of challenges can lead to inaccuracies that affect timelines and outcomes.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80',
    readTime: '5 min read',
  },
  {
    href: '/learn/news/project-transparency',
    title: '3 Reasons Why Project Transparency Is Vital for Your Company\'s Success',
    subtitle: '',
    desc: 'What is project transparency? Managing a project in which all team members can access all relevant information easily and efficiently leads to better outcomes for everyone.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    readTime: '6 min read',
  },
];

export default function NewsPage() {
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
            <p className="text-xs font-bold text-[#6dc744] tracking-[0.2em] uppercase mb-3">News & Insights</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Industry Perspectives</h1>
          </div>
        </div>

        <div className="bg-arbiter-gray-bg py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col sm:flex-row gap-0 bg-white border border-arbiter-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="sm:w-60 flex-shrink-0 aspect-video sm:aspect-auto overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border bg-amber-50 text-amber-700 border-amber-200 w-fit mb-3">Insight</span>
                  <h2 className="font-bold text-arbiter-dark text-base leading-snug mb-1 group-hover:text-arbiter-green transition-colors">{article.title}</h2>
                  {article.subtitle && <p className="text-xs text-arbiter-green font-medium mb-2">{article.subtitle}</p>}
                  <p className="text-sm text-arbiter-muted leading-relaxed mb-3">{article.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-arbiter-green text-xs font-semibold">Read more <ArrowRight size={12} /></div>
                    <span className="text-xs text-arbiter-muted">{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

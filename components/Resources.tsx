import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    tag: 'Insight',
    tagColor: 'bg-amber-50 text-amber-700 border border-amber-200',
    title: 'Why Paper-Based Commissioning Is Costing Projects Millions',
    desc: 'Tracking and managing paper check sheets causes scheduling delays and inaccurate progress reporting. Here\'s what the data shows.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    readTime: '7 min read',
    href: null,
  },
  {
    tag: 'Training',
    tagColor: 'bg-green-50 text-arbiter-green border border-arbiter-green/30',
    title: "Getting the Most From Arbiter's Earned vs. Burned Reporting",
    desc: 'A practical guide to tracking labour costs against estimated hours, and using historical data to estimate future projects accurately.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    readTime: '4 min read',
    href: null,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-arbiter-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-3">
              Learn
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arbiter-dark tracking-tight">
              Follow Along With Arbiter
            </h2>
            <p className="text-base text-arbiter-muted mt-3 max-w-xl leading-relaxed">
              Our team is focused on advancing workflows and innovation in the sectors we serve.
              Keep up to date with our insights, system training, and industry news.
            </p>
          </div>
          <a
            href="#resources"
            className="inline-flex items-center gap-1.5 text-arbiter-green font-semibold text-sm hover:text-arbiter-green-dark transition-colors group flex-shrink-0"
          >
            View All Resources
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((article) => {
            const inner = (
              <>
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${article.tagColor}`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-arbiter-muted">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-arbiter-dark text-sm leading-snug mb-2 group-hover:text-arbiter-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-arbiter-muted leading-relaxed line-clamp-3">{article.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-arbiter-green text-xs font-semibold group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={12} />
                  </div>
                </div>
              </>
            );

            return article.href ? (
              <Link
                key={article.title}
                href={article.href}
                className="group bg-white border border-arbiter-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-arbiter-dark/5 hover:-translate-y-1 transition-all duration-300"
              >
                {inner}
              </Link>
            ) : (
              <article
                key={article.title}
                className="group bg-white border border-arbiter-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-arbiter-dark/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

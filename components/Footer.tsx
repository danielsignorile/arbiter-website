import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    heading: 'What We Offer',
    links: [
      { label: 'SoftChecks', href: '/features/softchecks' },
      { label: 'Actions and Deficiencies', href: '/features/actions-and-deficiencies' },
      { label: 'Real-Time Reporting', href: '/features/real-time-reporting' },
      { label: 'Dynamic ITP', href: '/features/dynamic-itp' },
      { label: 'Doculink', href: '/features/doculink' },
      { label: 'Dossier (Document Turnover)', href: '/features/dossier' },
    ],
  },
  {
    heading: 'Why Arbiter',
    links: [
      { label: 'Purpose-Built Platform', href: '/#why' },
      { label: 'Offline & Mobile Capable', href: '/#why' },
      { label: 'Proven Track Record', href: '/#why' },
      { label: 'Full Audit Trail', href: '/#why' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'News & Insights', href: '/learn/news' },
      { label: 'Case Studies', href: '/learn/case-studies' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact Us', href: '/#contact' },
      { label: 'Request a Demo', href: '/#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/arbiter-icon.png"
                alt="Arbiter"
                width={48}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Arbiter is the completions management platform built for capital projects in
              energy, mining and infrastructure. Replace paper and spreadsheets with
              real-time digital control.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+15062371818"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 506-237-1818
              </a>
              <a
                href="mailto:info@contendo.ca"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@contendo.ca
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2026 Arbiter Project Completions, Contendo Inc.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

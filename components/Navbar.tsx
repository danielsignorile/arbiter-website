'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useDemoModal } from './DemoModalContext';

type NavItem = {
  label: string;
  sectionLabel?: string;
  items: { label: string; href: string; desc: string }[];
};

const navItems: NavItem[] = [
  {
    label: 'What We Offer',
    sectionLabel: 'PLATFORM FEATURES',
    items: [
      { label: 'SoftChecks', href: '/features/softchecks', desc: 'Digital check sheets, mobile & offline capable' },
      { label: 'Actions & Deficiencies', href: '/features/actions-and-deficiencies', desc: 'Real-time punch list tracking and assignment' },
      { label: 'Real-Time Reporting', href: '/features/real-time-reporting', desc: 'Earned vs. burned value, customizable dashboards' },
      { label: 'Dynamic ITP', href: '/features/dynamic-itp', desc: 'Inspection and Test Plans with full audit trail' },
      { label: 'Doculink', href: '/features/doculink', desc: 'Document repository, batch upload 500 files' },
      { label: 'Dossier', href: '/features/dossier', desc: 'Digital turnover packages archived on client systems' },
    ],
  },
  {
    label: 'Why Arbiter',
    sectionLabel: 'OUR DIFFERENTIATORS',
    items: [
      { label: 'Purpose-Built for Completions', href: '#why', desc: 'Designed ground-up for project completion and handover' },
      { label: 'Built by the Field', href: '#why', desc: '15+ years of in-field refinement with multi-disciplinary input' },
      { label: 'Offline & Mobile Capable', href: '#why', desc: 'Works in remote locations without WiFi or cellular' },
      { label: 'Proven Track Record', href: '#why', desc: '80–95% of projects completed on budget and schedule' },
    ],
  },
  {
    label: 'Learn',
    sectionLabel: 'RESOURCES',
    items: [
      { label: 'News & Insights', href: '/learn/news', desc: 'Innovations in project and workflow excellence' },
      { label: 'Case Studies', href: '/learn/case-studies', desc: 'Real project outcomes from Arbiter deployments' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about', desc: 'Our mission and story' },
      { label: 'News', href: '#news', desc: 'Latest from Arbiter' },
      { label: 'Contact Us', href: '#contact', desc: 'Reach out anytime' },
    ],
  },
];

export default function Navbar() {
  const { openModal } = useDemoModal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (i: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(i);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 130);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? 'shadow-md border-b border-arbiter-border' : 'border-b border-arbiter-border/40'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/arbiter-logo.png"
            alt="Arbiter"
            width={140}
            height={40}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav items */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((nav, i) => (
            <div
              key={nav.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  openIndex === i
                    ? 'text-arbiter-green bg-arbiter-gray-bg'
                    : 'text-arbiter-muted hover:text-arbiter-dark hover:bg-arbiter-gray-bg'
                }`}
              >
                {nav.label}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>

              {openIndex === i && (
                <div
                  className="absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-2xl border border-arbiter-border py-3 min-w-[280px] animate-fade-in"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  {nav.sectionLabel && (
                    <div className="px-4 pb-2 mb-1 border-b border-arbiter-border/60">
                      <span className="text-[10px] font-bold text-arbiter-muted/70 tracking-widest uppercase">
                        {nav.sectionLabel}
                      </span>
                    </div>
                  )}
                  {nav.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex flex-col px-4 py-2.5 hover:bg-arbiter-gray-bg transition-colors group"
                      onClick={() => setOpenIndex(null)}
                    >
                      <span className="text-sm font-semibold text-arbiter-dark group-hover:text-arbiter-green transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs text-arbiter-muted mt-0.5 leading-snug">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={openModal}
            className="bg-arbiter-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-arbiter-green-dark transition-all duration-200 shadow-md shadow-arbiter-green/20 hover:shadow-arbiter-green/30"
          >
            Schedule A Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-arbiter-muted hover:text-arbiter-dark hover:bg-arbiter-gray-bg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-arbiter-border px-4 pb-6 pt-2 animate-fade-in max-h-[80vh] overflow-y-auto">
          {navItems.map((nav, i) => (
            <div key={nav.label} className="border-b border-arbiter-border/50 last:border-0">
              <button
                className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-arbiter-dark"
                onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
              >
                {nav.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform text-arbiter-muted ${mobileExpanded === i ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileExpanded === i && (
                <div className="pb-3 pl-2 space-y-0.5">
                  {nav.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-2 px-3 rounded-md text-sm text-arbiter-muted hover:text-arbiter-green hover:bg-arbiter-gray-bg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={() => { openModal(); setMobileOpen(false); }}
              className="text-center bg-arbiter-green text-white text-sm font-semibold py-3 rounded-full hover:bg-arbiter-green-dark transition-colors"
            >
              Schedule A Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

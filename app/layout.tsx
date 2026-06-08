import type { Metadata } from 'next';
import './globals.css';
import { DemoModalProvider } from '@/components/DemoModalContext';

const OG_TITLE = 'Arbiter | Completions Management Software for Capital Projects';
const OG_DESCRIPTION =
  'Arbiter is the completions management platform built for capital projects in energy, mining and infrastructure. Real-time check sheets, punch lists, ITP and digital handover.';
// Absolute so social crawlers (LinkedIn, X, Facebook) always get a fully
// qualified URL — in dev, a relative path would resolve to localhost.
const OG_IMAGE = 'https://www.arbiter-completions.com/og-image.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arbiter-completions.com'),
  // Default (homepage) title + description. Inner pages override their own.
  title: 'Arbiter | Digital Completions Software for Energy and Capital Construction',
  description:
    'Arbiter is the completions management platform for capital projects in energy, mining and infrastructure. Replace paper check sheets and spreadsheets with real-time digital control from first walkdown to final handover.',
  keywords:
    'completions management software, capital projects, commissioning software, check sheets, punch list, ITP, digital handover, energy construction, Alberta, oil sands, mining',
  // Site-wide social defaults. Canonical is set per-page (the homepage owns the
  // root canonical) so inner pages are never marked as duplicates of "/".
  openGraph: {
    type: 'website',
    siteName: 'Arbiter',
    url: 'https://www.arbiter-completions.com',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Arbiter — Completions Management Software for Capital Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}

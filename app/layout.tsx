import type { Metadata } from 'next';
import './globals.css';
import { DemoModalProvider } from '@/components/DemoModalContext';

export const metadata: Metadata = {
  title: 'Arbiter: Digital Completions Software for Energy & Capital Construction',
  description:
    'Arbiter is the digital completions platform built for capital projects in energy, mining and infrastructure. Replace paper and spreadsheets with real-time digital control.',
  keywords: 'digital completions software, capital construction, energy, mining, infrastructure, inspection, ITP, deficiency tracking, project handover',
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

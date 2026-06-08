import type { Metadata } from 'next';

// The page itself is a Client Component ('use client') and cannot export
// metadata, so this Server Component layout supplies it for the route.
export const metadata: Metadata = {
  title: 'IPC Blackrod SAGD Case Study | Arbiter',
  description:
    'How Arbiter helped IPC catch a critical safety discrepancy before first fire on a SAGD facility in the Alberta oil sands — with a complete audit trail compiled instantly.',
  alternates: { canonical: '/case-studies/ipc-blackrod-sagd' },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

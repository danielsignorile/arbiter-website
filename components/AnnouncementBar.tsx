'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useAnnouncementBar } from './AnnouncementBarContext';

const BAR_HEIGHT = 'h-9'; // 36px — keep in sync with the spacer and Navbar offset

export default function AnnouncementBar() {
  const { visible, dismiss } = useAnnouncementBar();

  if (!visible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-[#3c7c20] text-white">
      <div
        className={`relative max-w-7xl mx-auto ${BAR_HEIGHT} flex items-center justify-center pl-4 pr-9 sm:px-12`}
      >
        <p className="text-center text-[13px] sm:text-sm leading-none font-medium">
          <span className="hidden sm:inline">
            Now live: IPC Blackrod SAGD Case Study. See how Arbiter enforced vendor
            accountability before startup.{' '}
          </span>
          <span className="sm:hidden">New Case Study: IPC Blackrod SAGD </span>
          <Link
            href="/case-studies/ipc-blackrod-sagd"
            className="font-semibold underline underline-offset-2 hover:text-white/80 whitespace-nowrap"
          >
            Read the case study
          </Link>
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/15 transition-colors"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}

/**
 * In-flow spacer that pushes page content down by the bar's height while it is
 * visible (the bar itself is fixed/out of flow). Collapses to nothing when the
 * bar is dismissed so content slides back up beneath the nav.
 */
export function AnnouncementSpacer() {
  const { visible } = useAnnouncementBar();
  return (
    <div
      aria-hidden
      className={`${visible ? BAR_HEIGHT : 'h-0'} transition-[height] duration-200`}
    />
  );
}

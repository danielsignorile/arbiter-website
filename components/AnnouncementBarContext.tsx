'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'arbiter-announcement-dismissed';

interface AnnouncementBarContextValue {
  visible: boolean;
  dismiss: () => void;
}

const AnnouncementBarContext = createContext<AnnouncementBarContextValue>({
  visible: false,
  dismiss: () => {},
});

export function AnnouncementBarProvider({ children }: { children: React.ReactNode }) {
  // Default to visible so the bar renders on the server (no flash for the
  // common, not-yet-dismissed case). If a previous dismissal is stored, hide
  // it after mount.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'true') setVisible(false);
    } catch {
      /* localStorage unavailable — keep the bar visible */
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* ignore */
    }
  };

  return (
    <AnnouncementBarContext.Provider value={{ visible, dismiss }}>
      {children}
    </AnnouncementBarContext.Provider>
  );
}

export function useAnnouncementBar() {
  return useContext(AnnouncementBarContext);
}

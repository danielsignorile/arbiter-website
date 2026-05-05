'use client';

import { createContext, useContext, useState } from 'react';
import DemoModal from './DemoModal';

interface DemoModalContextValue {
  openModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue>({ openModal: () => {} });

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <DemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  return useContext(DemoModalContext);
}

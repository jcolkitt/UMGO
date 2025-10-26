import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { mockFetch } from '@/state/api';
import { seededLedger } from '@/state/mock-data';
import { LedgerEntry } from '@/types/ledger';

interface LedgerContextValue {
  entries: LedgerEntry[];
  refresh: () => Promise<void>;
}

const LedgerContext = createContext<LedgerContextValue | undefined>(undefined);

export function LedgerProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<LedgerEntry[]>(seededLedger);

  const refresh = async () => {
    const response = await mockFetch(seededLedger);
    setEntries(response.data);
  };

  const value = useMemo(
    () => ({
      entries,
      refresh,
    }),
    [entries]
  );

  return <LedgerContext.Provider value={value}>{children}</LedgerContext.Provider>;
}

export function useLedger() {
  const context = useContext(LedgerContext);
  if (!context) {
    throw new Error('useLedger must be used within a LedgerProvider');
  }
  return context;
}

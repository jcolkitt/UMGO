import { ReactNode } from 'react';
import { LedgerProvider } from '@/state/LedgerContext';
import { UserProvider } from '@/state/UserContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <LedgerProvider>{children}</LedgerProvider>
    </UserProvider>
  );
}

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { mockFetch } from '@/state/api';
import { seededUser } from '@/state/mock-data';
import { User } from '@/types/user';

interface UserContextValue {
  user: User;
  refresh: () => Promise<void>;
  updateUser: (next: Partial<User>) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(seededUser);

  const refresh = async () => {
    const response = await mockFetch(seededUser);
    setUser(response.data);
  };

  const updateUser = (next: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...next }));
  };

  const value = useMemo(
    () => ({
      user,
      refresh,
      updateUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

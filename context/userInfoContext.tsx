// UserInfoContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type UserInfo = {
  name?: string;
  email?: string;
  theme?: 'light' | 'dark';
  emailNotifciation?: boolean;
  pushNotification?: boolean;
  weeklyProgressNotification?: boolean;
};

type UserInfoContextType = {
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
};

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  return <UserInfoContext.Provider value={{ user, setUser }}>{children}</UserInfoContext.Provider>;
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) throw new Error('useUserInfo must be used within UserInfoProvider');
  return context;
};

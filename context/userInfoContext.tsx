// UserInfoContext.tsx
import { ReactNode, createContext, useContext, useState } from 'react';

type UserInfo = {
  name?: string;
  email?: string;
  phone?: string;
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

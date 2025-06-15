// UserInfoContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  const [user, setUser] = useState<UserInfo | null>({
    name: 'user',
    email: 'example@gmail.com',
    theme: 'light',
  });

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then((storedUser) => {
      if (storedUser) {
        const parsed = JSON.parse(storedUser);

        setUser({
          name: parsed.name ?? 'user',
          email: parsed.email ?? 'example@gmail.com',
          theme: parsed.theme ?? 'light',
          emailNotifciation: parsed.emailNotifciation,
          pushNotification: parsed.pushNotification,
          weeklyProgressNotification: parsed.weeklyProgressNotification,
        });
      } else {
        setUser(user); // fallback if nothing in storage
      }
    });
  }, []);

  return <UserInfoContext.Provider value={{ user, setUser }}>{children}</UserInfoContext.Provider>;
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) throw new Error('useUserInfo must be used within UserInfoProvider');
  return context;
};

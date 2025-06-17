import './global.css';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { UserInfoProvider } from 'context/userInfoContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from 'components/ui/Sidebar/Sidebar';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isFirstTime, setFirstTime] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <RootLayout isAuth={isAuth} isFirstTime={isFirstTime} />
          </SafeAreaView>
        </PaperProvider>
      </UserInfoProvider>
    </QueryClientProvider>
  );
}

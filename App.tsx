import './global.css';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Sidebar } from 'components/ui/Sidebar';
import { PaperProvider } from 'react-native-paper';
import { UserInfoProvider } from 'context/userInfoContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  const isAuth = false;

  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Sidebar isAuth={isAuth} />
          </SafeAreaView>
        </PaperProvider>
      </UserInfoProvider>
    </QueryClientProvider>
  );
}

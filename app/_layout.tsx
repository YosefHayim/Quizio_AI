import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { UserInfoProvider } from 'context/userInfoContext';
import { colors } from 'constants/colors';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        <PaperProvider>
          <StatusBar style="auto" />
          <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightTheme }}>
            <Slot />
          </SafeAreaView>
        </PaperProvider>
      </UserInfoProvider>
    </QueryClientProvider>
  );
}

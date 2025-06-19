import { ActivityIndicator, PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
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
            <Suspense fallback={<ActivityIndicator color="#5C6BC0" size="large" />}>
              <Slot />
            </Suspense>
          </SafeAreaView>
        </PaperProvider>
      </UserInfoProvider>
    </QueryClientProvider>
  );
}

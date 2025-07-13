import { ActivityIndicator, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        <StatusBar style="auto" />
        <SafeAreaView className="bg-light_theme flex-1">
          <Suspense fallback={<ActivityIndicator color={colors.blue} size="large" />}>
            <Slot />
          </Suspense>
        </SafeAreaView>
      </UserInfoProvider>
    </QueryClientProvider>
  );
}

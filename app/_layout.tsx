import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DrawerStack from './(tabs)/_layout';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { UserInfoProvider } from 'context/userInfoContext';
import WelcomeScreenStepOne from './on-board/step-1';
import WelcomeScreenStepThree from './on-board/step-2';
import WelcomeScreenStepTwo from './on-board/step-3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  const [isAuth, setAuth] = useState(false);
  const [isFirstTime, setFirstTime] = useState(false);

  return (
    <SafeAreaView>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <UserInfoProvider>
            <PaperProvider>
              <StatusBar style="light" />
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuth && !isFirstTime && <Stack.Screen name="(tabs)" component={DrawerStack} />}
                <Stack.Screen name="step-1" component={WelcomeScreenStepOne} />
                <Stack.Screen name="step-2" component={WelcomeScreenStepTwo} />
                <Stack.Screen name="step-3" component={WelcomeScreenStepThree} />
              </Stack.Navigator>
            </PaperProvider>
          </UserInfoProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootLayout;

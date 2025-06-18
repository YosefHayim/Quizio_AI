import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppUIScreen } from 'screens/AppUIScreen';
import { DashboardScreen } from 'screens/DashboardScreen';
import DrawerStack from './(tabs)/_layout';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import { SignInScreen } from 'screens/SignInScreen';
import { SignUpScreen } from 'screens/SignUpScreen';
import { StatusBar } from 'expo-status-bar';
import { UserInfoProvider } from 'context/userInfoContext';
import { VerifyOTPScreen } from 'screens/VerifyOTPScreen';
import { WelcomeScreenStepOne } from 'screens/WelcomeScreenStepOne';
import { WelcomeScreenStepThree } from 'screens/WelcomeScreenStepThree';
import { WelcomeScreenStepTwo } from 'screens/WelcomeScreenStepTwo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const RootLayout: React.FC<{ isAuth: boolean; isFirstTime: boolean }> = ({ isAuth, isFirstTime }) => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <UserInfoProvider>
            <PaperProvider>
              <StatusBar style="light" />
              <Stack.Navigator initialRouteName="step-1" screenOptions={{ headerShown: false }}>
                {isAuth && !isFirstTime && <Stack.Screen name="(tabs)" component={DrawerStack} />}
                <Stack.Screen name="sign-in" component={SignInScreen} />
                <Stack.Screen name="verify-otp-screen" component={VerifyOTPScreen} />
                <Stack.Screen name="sign-up" component={SignUpScreen} />
                <Stack.Screen name="app-ui" component={AppUIScreen} />
                <Stack.Screen name="dashboard" component={DashboardScreen} />
                <Stack.Screen name="step-1" component={WelcomeScreenStepOne} />
                <Stack.Screen name="step-2" component={WelcomeScreenStepTwo} />
                <Stack.Screen name="step-3" component={WelcomeScreenStepThree} />
              </Stack.Navigator>
            </PaperProvider>
          </UserInfoProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootLayout;

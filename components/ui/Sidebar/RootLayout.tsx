import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from 'screens/SignInScreen';
import DrawerStack from './DrawerStack';
import { AppUIScreen } from 'screens/AppUIScreen';
import { VerifyOTPScreen } from 'screens/VerifyOTPScreen';
import { DashboardScreen } from 'screens/DashboardScreen';
import { WelcomeScreenStepThree } from 'screens/WelcomeScreenStepThree';
import { WelcomeScreenStepTwo } from 'screens/WelcomeScreenStepTwo';
import { WelcomeScreenStepOne } from 'screens/WelcomeScreenStepOne';
import { SignUpScreen } from 'screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const RootLayout: React.FC<{ isAuth: boolean; isFirstTime: boolean }> = ({ isAuth, isFirstTime }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="step-1" screenOptions={{ headerShown: false }}>
        {isAuth && !isFirstTime && <Stack.Screen name="drawer" component={DrawerStack} />}
        <Stack.Screen name="sign-in" component={SignInScreen} />
        <Stack.Screen name="verify-otp-screen" component={VerifyOTPScreen} />
        <Stack.Screen name="sign-up" component={SignUpScreen} />
        <Stack.Screen name="app-ui" component={AppUIScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="step-1" component={WelcomeScreenStepOne} />
        <Stack.Screen name="step-2" component={WelcomeScreenStepTwo} />
        <Stack.Screen name="step-3" component={WelcomeScreenStepThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;

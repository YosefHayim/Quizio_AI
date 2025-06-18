import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from 'screens/SignInScreen';
import DrawerStack from './DrawerStack';
import { AppUIScreen } from 'screens/AppUIScreen';
import { SignupScreen } from 'screens/SignupScreen';
import { VerifyOTPScreen } from 'screens/VerifyOTPScreen';
import { DashboardScreen } from 'screens/DashboardScreen';

const Stack = createNativeStackNavigator();

const RootLayout: React.FC<{ isAuth: boolean; isFirstTime: boolean }> = ({ isAuth, isFirstTime }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
        {isAuth && !isFirstTime ? <Stack.Screen name="drawer" component={DrawerStack} /> : <Stack.Screen name="signin" component={VerifyOTPScreen} />}
        <Stack.Screen name="verify-otp-screen" component={VerifyOTPScreen} />
        <Stack.Screen name="sign-in" component={SignInScreen} />
        <Stack.Screen name="app-ui" component={AppUIScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;

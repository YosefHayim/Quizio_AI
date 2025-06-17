import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from 'screens/SignInScreen';
import DrawerStack from './DrawerStack';
import { AppUIScreen } from 'screens/AppUIScreen';

const Stack = createNativeStackNavigator();

const RootLayout: React.FC<{ isAuth: boolean; isFirstTime: boolean }> = ({ isAuth, isFirstTime }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
        {isAuth && !isFirstTime ? <Stack.Screen name="drawer" component={DrawerStack} /> : <Stack.Screen name="signin" component={SignInScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;

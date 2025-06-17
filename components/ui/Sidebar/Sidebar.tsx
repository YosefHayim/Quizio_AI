import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from 'screens/WelcomeScreen';
import DrawerStack from './DrawerStack';
import { AppUIScreen } from 'screens/AppUIScreen';

const Stack = createNativeStackNavigator();

const RootLayout: React.FC<{ isAuth: boolean; isFirstTime: boolean }> = ({ isAuth, isFirstTime }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
        {isAuth && !isFirstTime ? <Stack.Screen name="drawer" component={DrawerStack} /> : <Stack.Screen name="welcome" component={AppUIScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;

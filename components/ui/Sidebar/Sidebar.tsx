import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from 'screens/WelcomeScreen';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const Sidebar: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
        {isAuth ? <Stack.Screen name="drawer" component={DrawerStack} /> : <Stack.Screen name="welcome" component={WelcomeScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Sidebar;

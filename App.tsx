import './global.css';

import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from 'screens/HomeScreen';
import { GenerateQuizScreen } from 'screens/GenerateQuizScreen';
import { HistoryQuizScreen } from 'screens/HistoryQuizScreen';
import { ProfileScreen } from 'screens/ProfileScreen';
import { SettingsScreen } from 'screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
          <Drawer.Screen
            name="generate-quiz"
            component={GenerateQuizScreen}
            options={{ title: 'Create Quiz', drawerIcon: () => <></> }}
          />
          <Drawer.Screen
            name="history-quiz"
            component={HistoryQuizScreen}
            options={{ title: 'History Quiz' }}
          />
          <Drawer.Screen name="profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          <Drawer.Screen
            name="settings"
            component={SettingsScreen}
            options={{ title: 'Settings' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

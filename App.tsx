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
          <Drawer.Screen name="home" component={HomeScreen} />
          <Drawer.Screen name="generate-quiz" component={GenerateQuizScreen} />
          <Drawer.Screen name="history-quiz" component={HistoryQuizScreen} />
          <Drawer.Screen name="profile" component={ProfileScreen} />
          <Drawer.Screen name="settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

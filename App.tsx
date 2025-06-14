import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateQuizScreen from 'screens/CreateQuizScreen';
import QuizHistoryScreen from 'screens/QuizHistoryScreen';
import SettingsScreen from 'screens/SettingsScreen';
import DashboardScreen from 'screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-10">
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
          <Drawer.Screen name="create-quiz" component={CreateQuizScreen} options={{ title: 'Create Quiz' }} />
          <Drawer.Screen name="history-quiz" component={QuizHistoryScreen} options={{ title: 'Quiz History' }} />
          <Drawer.Screen name="settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

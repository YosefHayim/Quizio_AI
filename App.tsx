import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from 'screens/DashboardScreen';
import CreateQuizScreen from 'screens/CreateQuizScreen';
import QuizHistoryScreen from 'screens/QuizHistoryScreen';
import SettingsScreen from 'screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView className="mx-10 flex-1">
      <StatusBar style="auto" />
      <Drawer.Navigator>
        <Drawer.Screen name="dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
        <Drawer.Screen
          name="create-quiz"
          component={CreateQuizScreen}
          options={{ title: 'Create Quiz' }}
        />
        <Drawer.Screen
          name="history-quiz"
          component={QuizHistoryScreen}
          options={{ title: 'Quiz History' }}
        />
        <Drawer.Screen name="settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}

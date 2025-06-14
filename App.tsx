import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateQuizScreen from 'screens/CreateQuizScreen';
import QuizHistoryScreen from 'screens/QuizHistoryScreen';
import SettingsScreen from 'screens/SettingsScreen';
import DashboardScreen from 'screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { colors } from 'constants/colors';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-10">
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveBackgroundColor: colors.gray,
            drawerActiveTintColor: colors.red,
          }}>
          <Drawer.Screen
            name="dashboard"
            component={DashboardScreen}
            options={{
              title: 'Dashboard',
              drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
            }}
          />
          <Drawer.Screen
            name="create-quiz"
            component={CreateQuizScreen}
            options={{
              title: 'Create Quiz',
              drawerIcon: () => <AntDesign name="form" size={24} color="black" />,
            }}
          />
          <Drawer.Screen
            name="history-quiz"
            component={QuizHistoryScreen}
            options={{
              title: 'Quiz History',
              drawerIcon: () => <FontAwesome name="history" size={24} color="black" />,
            }}
          />
          <Drawer.Screen
            name="settings"
            component={SettingsScreen}
            options={{
              title: 'Settings',
              drawerIcon: () => <Feather name="settings" size={24} color="black" />,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

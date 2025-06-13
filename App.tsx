import './global.css';

import { StatusBar } from 'expo-status-bar';

import { DashboardScreen } from 'screens/DashboardScreen';
import { GenerateQuizScreen } from 'screens/GenerateQuizScreen';
import { HistoryQuizScreen } from 'screens/HistoryQuizScreen';
import { ProfileScreen } from 'screens/ProfileScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="dashboard"
            screenOptions={{
              keyboardDismissMode: 'on-drag',
              drawerActiveBackgroundColor: '#f5f5f5',
              drawerLabelStyle: {
                fontSize: 16,
                fontWeight: 'light',
                color: 'black',
              },
              drawerItemStyle: {
                marginVertical: 5,
                borderRadius: 8,
              },
            }}>
            <Drawer.Screen
              name="dashboard"
              component={DashboardScreen}
              options={{
                title: 'Home',
                drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
              }}
            />
            <Drawer.Screen
              name="generate-quiz"
              component={GenerateQuizScreen}
              options={{
                title: 'Create Quiz',
                drawerIcon: () => <Entypo name="new-message" size={24} color="black" />,
              }}
            />
            <Drawer.Screen
              name="history-quiz"
              component={HistoryQuizScreen}
              options={{
                title: 'History Quiz',
                drawerIcon: () => <MaterialCommunityIcons name="history" size={24} color="black" />,
              }}
            />
            <Drawer.Screen
              name="profile"
              component={ProfileScreen}
              options={{
                title: 'Profile',
                drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
              }}
            />
            <Drawer.Screen
              name="settings"
              component={SettingsScreen}
              options={{
                title: 'Settings',
                drawerIcon: () => <AntDesign name="setting" size={24} color="black" />,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

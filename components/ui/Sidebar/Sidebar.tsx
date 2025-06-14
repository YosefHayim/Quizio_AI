import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from 'constants/colors';
import { CreateQuizScreen } from 'screens/CreateQuizScreen';
import { DashboardScreen } from 'screens/DashboardScreen';
import { QuizHistoryScreen } from 'screens/QuizHistoryScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;

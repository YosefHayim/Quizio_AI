import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from 'constants/colors';
import { CreateQuizScreen } from 'screens/CreateQuizScreen';
import { DashboardScreen } from 'screens/DashboardScreen';
import { QuizHistoryScreen } from 'screens/QuizHistoryScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="dashboard" screenOptions={{}}>
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
  );
};

export default DrawerStack;

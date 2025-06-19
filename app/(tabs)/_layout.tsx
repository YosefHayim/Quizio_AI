import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabsStack = () => {
  return (
    <Tabs initialRouteName="dashboard" screenOptions={{}}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: 'Dashboard',
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: () => <AntDesign name="form" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: () => <FontAwesome name="trophy" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default TabsStack;

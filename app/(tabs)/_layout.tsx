import { Tabs, router } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import CustomHeader from 'components/CustomHeader';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsStack = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerBackButtonDisplayMode: 'minimal',
        animation: 'shift',
        tabBarItemStyle: { paddingTop: 10 },
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerBackButtonDisplayMode: 'default',
          title: 'Dashboard',
          header: () => <CustomHeader headerName="Dashboard" navigateBackTo={() => null} />,

          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          header: () => <CustomHeader headerName="History" navigateBackTo={() => router.back()} />,
          tabBarIcon: () => <AntDesign name="form" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          header: () => <CustomHeader headerName="Leaderboard" navigateBackTo={() => router.back()} />,

          tabBarIcon: () => <FontAwesome name="trophy" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          header: () => <CustomHeader headerName="Settings" navigateBackTo={() => router.back()} />,
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default TabsStack;

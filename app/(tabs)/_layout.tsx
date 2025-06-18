import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabsStack = () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="create-quiz"
        options={{
          title: 'Create Quiz',
          tabBarIcon: () => <AntDesign name="form" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="history-quiz"
        options={{
          title: 'Quiz History',
          tabBarIcon: () => <FontAwesome name="history" size={24} color="black" />,
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

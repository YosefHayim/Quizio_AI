import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Title from 'components/Title';
import { View } from 'react-native';

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
          title: 'Dashboard',
          header: () => (
            <View style={{ padding: 10 }}>
              <Title titleText="Dashboard" extraStyle={{ padding: 10 }} />
              <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
            </View>
          ),
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          header: () => (
            <View style={{ padding: 10 }}>
              <Title titleText="History" extraStyle={{ padding: 10 }} />
              <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
            </View>
          ),
          tabBarIcon: () => <AntDesign name="form" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          header: () => (
            <View style={{ padding: 10 }}>
              <Title titleText="Leaderboard" extraStyle={{ padding: 10 }} />
              <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
            </View>
          ),
          tabBarIcon: () => <FontAwesome name="trophy" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          header: () => (
            <View style={{ padding: 10 }}>
              <Title titleText="Settings" extraStyle={{ padding: 10 }} />
              <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
            </View>
          ),
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default TabsStack;

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <MaterialIcons color={color} name="home" size={28} />,
        }}
      />
      <Tabs.Screen
        name="generate-quiz"
        options={{
          title: "Generate Quiz",
          tabBarIcon: ({ color }) => <MaterialIcons color={color} name="create" size={28} />,
        }}
      />
      <Tabs.Screen
        name="history-quiz"
        options={{
          title: "Quiz History",
          tabBarIcon: ({ color }) => <MaterialIcons color={color} name="history" size={28} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <MaterialIcons color={color} name="settings" size={28} />,
        }}
      />
    </Tabs>
  );
}

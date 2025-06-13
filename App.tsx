import { StatusBar } from 'expo-status-bar';
import './global.css';
import { View, Text } from 'react-native';
import { verifyInstallation } from 'nativewind';

export default function App() {
  verifyInstallation();
  return (
    <>
      <StatusBar style="auto" />
      <View className="h-20 w-40 items-center justify-center rounded-lg bg-blue-500">
        <Text className="text-lg font-bold text-white">Hello Nativewind</Text>
      </View>
    </>
  );
}

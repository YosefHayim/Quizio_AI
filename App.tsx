import { StatusBar } from 'expo-status-bar';
import './global.css';
import { verifyInstallation } from 'nativewind';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  verifyInstallation();

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" />
      <Text className="text-2xl text-white">Hi there</Text>
    </SafeAreaView>
  );
}

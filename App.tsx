import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import { verifyInstallation } from 'nativewind';
import LoginScreen from 'screens/LoginScreen';

export default function App() {
  verifyInstallation();

  return (
    <SafeAreaView className="flex-1 p-20">
      <StatusBar style="light" />
      <LoginScreen />
    </SafeAreaView>
  );
}

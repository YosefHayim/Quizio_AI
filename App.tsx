import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import { Sidebar } from 'components/ui/Sidebar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Sidebar />
    </SafeAreaView>
  );
}

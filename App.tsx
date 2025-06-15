import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import { Sidebar } from 'components/ui/Sidebar';
import { PaperProvider } from 'react-native-paper';
import { UserInfoProvider } from 'context/userInfoContext';

export default function App() {
  return (
    <UserInfoProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="light" />
          <Sidebar />
        </SafeAreaView>
      </PaperProvider>
    </UserInfoProvider>
  );
}

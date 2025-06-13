import './global.css';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Sidebar } from 'components/ui/Sidebar';
import { Suspense } from 'react';
import { LoaderScreen } from 'screens/LoaderScreen';

export default function App() {
  return (
    <>
      <Suspense fallback={<LoaderScreen />}>
        <StatusBar style="light" />
        <SafeAreaView className="flex-1 p-10">
          <NavigationContainer>
            <Sidebar />
          </NavigationContainer>
        </SafeAreaView>
      </Suspense>
    </>
  );
}

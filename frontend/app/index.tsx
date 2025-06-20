import '../global.css';

import { ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { verifyInstallation } from 'nativewind';

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    verifyInstallation();
    const checkStatus = async () => {
      try {
        const onboardingDone = await AsyncStorage.getItem('hasCompletedOnboarding');
        const accessToken = await AsyncStorage.getItem('accessToken');

        if (!onboardingDone) {
          // router.push('/on-board/step-1');
          router.replace('/dashboard');
          // router.push('/auth/sign-in');
        } else if (!accessToken) {
        } else {
        }
      } catch (e) {
        console.error('Routing error:', e);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#5C6BC0" size="large" />
      </View>
    );
  }

  return null;
}

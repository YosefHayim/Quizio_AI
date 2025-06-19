import { ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        await AsyncStorage.multiRemove(['hasCompletedOnboarding', 'accessToken']);
        const onboardingDone = await AsyncStorage.getItem('hasCompletedOnboarding');
        const accessToken = await AsyncStorage.getItem('accessToken');

        if (!onboardingDone) {
          // router.push('/on-board/step-1');
          router.push('/dashboard');
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

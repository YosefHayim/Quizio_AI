import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export const isUserOnBoraded = async () => {
  try {
    const onboardingDone = await AsyncStorage.getItem('hasCompletedOnboarding');
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (!onboardingDone) {
      // router.push('/on-board/step-1');
    } else if (!accessToken) {
      // router.push('/auth/sign-in');
      router.push('/on-board/step-6');
    } else {
      // router.push('/dashboard');
    }
  } catch (e) {
    console.error('Routing error:', e);
  }
};

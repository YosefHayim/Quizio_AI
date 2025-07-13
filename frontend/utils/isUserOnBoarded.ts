import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export const isUserOnBoraded = async () => {
  try {
    const onboardingDone = await AsyncStorage.getItem('hasCompletedOnboarding');
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (!onboardingDone) {
      // router.push('/on-board/step-1');
      // router.push('/dashboard');
      // router.push('/auth/sign-in');
      router.push('/ui-design/app-ui');
    } else if (!accessToken) {
    } else {
    }
  } catch (e) {
    console.error('Routing error:', e);
  }
};

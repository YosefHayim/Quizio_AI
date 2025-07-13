import '../global.css';

import { ActivityIndicator, View } from 'react-native';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/dev';
import { SplashScreen, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyInstallation } from 'nativewind';

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [loaded, error] = useFonts([
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  ]);

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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#5C6BC0" size="large" />
      </View>
    );
  }

  return null;
}

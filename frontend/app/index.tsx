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

import { isUserOnBoraded } from 'utils/isUserOnBoarded';
import { verifyInstallation } from 'nativewind';

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
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
    isUserOnBoraded();
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

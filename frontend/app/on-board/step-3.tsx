import { ImageBackground, StyleSheet, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';
import { router } from 'expo-router';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const WelcomeScreenStepThree = () => {
  const { setItem } = useAsyncStorage('hasCompletedOnboarding');

  useEffect(() => {
    (async () => {
      try {
        await setItem('true');
      } catch (e) {
        console.error('Error setting has completed unboarding to true', e);
      }
    })();
  }, []);

  return (
    <ImageBackground source={require('../../assets/step-3.png')} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Title titleText="Track Your Progress. Level Up." extraStyle={{ textAlign: 'center' }} />
          <Paragraph text="Earn badges, measure" extraStyle={{ textAlign: 'center' }} />
          <Paragraph text="improvement and keep learning" extraStyle={{ textAlign: 'center' }} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton buttonText="Get Started" buttonType="confirmation" onPress={() => router.push('/auth/sign-in')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: '#070916',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    gap: 12,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default WelcomeScreenStepThree;

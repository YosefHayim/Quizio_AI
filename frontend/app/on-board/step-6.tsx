import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const WelcomeScreenStepFour = () => {
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
    <CustomScreen>
      <Image source={require('../../assets/goal.svg')} />
      <CustomTitle titleText="Reach your goals" />
      <CustomText text="to your goals and beyond Track progress, stay motivated, and level up every day" />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

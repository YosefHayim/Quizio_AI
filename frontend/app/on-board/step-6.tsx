import * as crypto from 'expo-crypto';

import { FlatList, View } from 'react-native';

import ClapSvg from '../../assets/clap.svg';
import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Entypo } from '@expo/vector-icons';
import OnBoardingProgress from 'components/OnBoardingProgress';
import { router } from 'expo-router';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const prosOfQuizio = [
  { text: 'Unlimited Quiz Creation', key: crypto.randomUUID() },
  { text: 'Advanced Quiz Types', key: crypto.randomUUID() },
  { text: 'Fully Personal Analytics Dashboard', key: crypto.randomUUID() },
  { text: 'Smart Study Planner with reminders and suggested goals', key: crypto.randomUUID() },
];

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
      <CustomTitle titleText="Premium members gain more" extraStyle="text-xl font-bold" />
      <CustomText text="Only 2$ Monthly" extraStyle="text-xl text-center font-semibold" />

      {prosOfQuizio.map((item) => (
        <View className="w-full flex-row items-center justify-start" key={item.key}>
          <Entypo name="dot-single" size={25} className="w-min" />
          <CustomText text={item.text} key={item.key} extraStyle="p-3" />
        </View>
      ))}

      <CustomButton buttonText="Join Now" onPress={() => router.push('/auth/sign-up')} />
      <ClapSvg />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

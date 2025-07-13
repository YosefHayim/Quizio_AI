import * as crypto from 'expo-crypto';

import ClapSvg from '../../assets/clap.svg';
import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { FlatList } from 'react-native';
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
      <OnBoardingProgress currentStep={5} />
      <CustomTitle titleText="Premium members gain more " />
      <CustomText text="2$ Monthly Subscription" />

      <FlatList
        data={prosOfQuizio}
        contentContainerStyle={{ alignItems: 'flex-start' }}
        renderItem={({ item }) => (
          <CustomText text={`* ${item.text}`} key={item.key} extraStyle="p-5" />
        )}
      />

      <CustomButton buttonText="Join Now" onPress={() => router.push('/on-board/final-step')} />
      <ClapSvg />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

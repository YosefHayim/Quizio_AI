import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';
import OnBoardingProgress from 'components/OnBoardingProgress';
import { router } from 'expo-router';

const WelcomeScreenStepFour = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={4} />
      <Image source={require('../../assets/goal.svg')} />
      <CustomTitle titleText="Reach your goals" />
      <CustomText text="to your goals and beyond Track progress, stay motivated, and level up every day" />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-5')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

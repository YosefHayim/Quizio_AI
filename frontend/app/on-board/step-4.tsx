import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import OnBoardingProgress from 'components/OnBoardingProgress';
import { router } from 'expo-router';

const WelcomeScreenStepFour = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={3} />
      <CustomTitle titleText="Grow and improve" />
      <CustomText text="Stay consistent and see the results speak for their selves" />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-5')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import OnBoardingProgress from 'components/OnBoardingProgress';
import { router } from 'expo-router';

const WelcomeScreenStepThree = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={2} />
      <CustomTitle titleText="Enjoy the process" />
      <CustomText text=" Have a fun learning experience anywhere and anytime" />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-3')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepThree;

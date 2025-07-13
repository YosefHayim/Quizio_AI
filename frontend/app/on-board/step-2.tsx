import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import OnBoardingProgress from 'components/OnBoardingProgress';
import VidSvg from '../../assets/vid.svg';
import { router } from 'expo-router';

const WelcomeScreenStepTwo = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={1} />
      <VidSvg />
      <CustomTitle titleText="Watch videos" />
      <CustomText
        text="Turn every video into a journey with AI powered quizzes"
        extraStyle="text-center text-xl font-light"
      />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-3')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepTwo;

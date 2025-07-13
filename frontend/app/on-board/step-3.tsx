import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import LearnSvg from '../../assets/learn.svg';
import OnBoardingProgress from 'components/OnBoardingProgress';
import { router } from 'expo-router';

const WelcomeScreenStepThree = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={2} />
      <LearnSvg />
      <CustomTitle titleText="Enjoy the process" />
      <CustomText
        text="Have a fun learning experience anywhere and anytime"
        extraStyle="text-center text-xl font-light"
      />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-4')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepThree;

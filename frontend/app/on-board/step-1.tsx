import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import OnBoardingProgress from 'components/OnBoardingProgress';
import TimeTableSvg from '../../assets/timetable-illo.svg';
import { router } from 'expo-router';

const WelcomeScreenStepOne = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={0} />
      <TimeTableSvg />
      <CustomTitle titleText="Plan your time" />
      <CustomText
        text="Stay organized with smart study plans tailored to your pace."
        extraStyle="text-center text-xl font-light"
      />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-2')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepOne;

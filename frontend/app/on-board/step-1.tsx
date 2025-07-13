import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import OnBoardingProgress from 'components/OnBoardingProgress';
import TimeTableSvg from '../../assets/timetable-illo.svg';

const WelcomeScreenStepOne = () => {
  return (
    <CustomScreen>
      <OnBoardingProgress currentStep={1} />
      <TimeTableSvg />
      <CustomTitle titleText="Plan your time" />
      <CustomText
        text="Stay organized with smart study plans tailored to your pace."
        extraStyle="text-center"
      />
    </CustomScreen>
  );
};

export default WelcomeScreenStepOne;

import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import OnBoardingProgressIcon from 'components/OnBoardingProgressIcon';
import VidSvg from '../../assets/vid.svg';
import { colors } from 'constants/colors';

const WelcomeScreenStepTwo = () => {
  return (
    <CustomScreen>
      <OnBoardingProgressIcon bg={colors.blue} size={35} />
      <VidSvg />
      <CustomTitle titleText="Watch videos" />
      <CustomText text="Turn every video into a journey with AI powered quizzes" />
    </CustomScreen>
  );
};

export default WelcomeScreenStepTwo;

import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';

const WelcomeScreenStepTwo = () => {
  return (
    <CustomScreen>
      <Image source={require('../../assets/vid.svg')} />
      <CustomTitle titleText="Watch videos" />
      <CustomText text="Turn every video into a journey with AI powered quizzes" />
    </CustomScreen>
  );
};

export default WelcomeScreenStepTwo;

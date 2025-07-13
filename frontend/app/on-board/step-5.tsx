import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';

const WelcomeScreenStepFour = () => {
  return (
    <CustomScreen>
      <Image source={require('../../assets/goal.svg')} />
      <CustomTitle titleText="Reach your goals" />
      <CustomText text="to your goals and beyond Track progress, stay motivated, and level up every day" />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

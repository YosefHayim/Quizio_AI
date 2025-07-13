import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';

const WelcomeScreenStepFour = () => {
  return (
    <CustomScreen>
      <Image source={require('../../assets/self-growth.svg')} />
      <CustomTitle titleText="Grow and improve" />
      <CustomText text="Stay consistent and see the results speak for their selves" />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

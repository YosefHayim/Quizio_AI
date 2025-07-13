import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';

const WelcomeScreenStepOne = () => {
  return (
    <CustomScreen>
      <Image source={require('../../assets/timetable-illo.svg')} />
      <CustomTitle titleText="Plan your time" />
      <CustomText text="Stay organized with smart study plans tailored to your pace." />
    </CustomScreen>
  );
};

export default WelcomeScreenStepOne;

import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { Image } from 'react-native';

const WelcomeScreenStepThree = () => {
  return (
    <CustomScreen>
      <Image source={require('../../assets/learn.svg')} />
      <CustomTitle titleText="Enjoy the process" />
      <CustomText text=" Have a fun learning experience anywhere and anytime" />
    </CustomScreen>
  );
};

export default WelcomeScreenStepThree;

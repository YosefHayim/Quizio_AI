import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUserInfo } from 'context/userInfoContext';
import { CustomScreen } from 'components/CustomScreen';

const WelcomeScreenStepTwo = () => {
  const navigation = useNavigation();
  const userInfo = useUserInfo();

  return (
    <CustomScreen>
      <Text>dashboard screen</Text>
    </CustomScreen>
  );
};

export default WelcomeScreenStepTwo;

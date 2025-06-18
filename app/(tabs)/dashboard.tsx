import { Text, View } from 'react-native';

import CustomScreen from 'components/CustomScreen';
import Title from 'components/Title';
import { useNavigation } from 'expo-router';
import { useUserInfo } from 'context/userInfoContext';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const userInfo = useUserInfo();

  return (
    <CustomScreen>
      <Title titleText={`Welcome back!`} />
    </CustomScreen>
  );
};

export default DashboardScreen;

import { Text, View } from 'react-native';

import { CustomScreen } from 'components/CustomScreen';
import { Title } from 'components/Title';
import { useNavigation } from '@react-navigation/native';
import { useUserInfo } from 'context/userInfoContext';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const userInfo = useUserInfo();

  return (
    <CustomScreen>
      <View>
        <Title titleText={`Welcome back${userInfo.user?.name}`} />
      </View>
    </CustomScreen>
  );
};

export default DashboardScreen;

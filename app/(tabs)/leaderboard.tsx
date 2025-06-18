import CustomScreen from 'components/CustomScreen';
import Title from 'components/Title';
import { useUserInfo } from 'context/userInfoContext';

const DashboardScreen = () => {
  const userInfo = useUserInfo();

  return (
    <CustomScreen>
      <Title titleText={`Welcome back! ${userInfo.user?.name}`} />
    </CustomScreen>
  );
};

export default DashboardScreen;

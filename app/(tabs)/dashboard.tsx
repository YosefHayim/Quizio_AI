import CustomScreen from 'components/CustomScreen';
import Title from 'components/Title';
import { useUserInfo } from 'context/userInfoContext';

const DashboardScreen = () => {
  const { user } = useUserInfo();

  return (
    <CustomScreen>
      <Title titleText={`Welcome back! ${user!.name}`} />
    </CustomScreen>
  );
};

export default DashboardScreen;

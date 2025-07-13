import CustomScreen from 'components/CustomScreen';
import Title from 'components/CustomTitle';
import { useUserInfo } from 'context/userInfoContext';

const LeaderboardScreen = () => {
  const userInfo = useUserInfo();

  return (
    <CustomScreen>
      <Title titleText={`Welcome back! ${userInfo.user?.name}`} />
    </CustomScreen>
  );
};

export default LeaderboardScreen;

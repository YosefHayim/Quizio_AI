import CustomHeader from 'components/CustomHeader';
import CustomScreen from 'components/CustomScreen';
import { router } from 'expo-router';

const DeactivateOrDeleteScreen = () => {
  return (
    <CustomScreen>
      <CustomHeader headerName="Deactivate Or Delete" navigateBackTo={() => router.navigate('/settings/account')} />
    </CustomScreen>
  );
};

export default DeactivateOrDeleteScreen;

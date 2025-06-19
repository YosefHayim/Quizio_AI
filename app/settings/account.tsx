import { Text, View } from 'react-native';

import CustomHeader from 'components/CustomHeader';
import CustomScreen from 'components/CustomScreen';
import LinkRow from 'components/LinkRow';
import { router } from 'expo-router';

const AccountScreen = () => {
  return (
    <CustomScreen>
      <CustomHeader headerName="Account" navigateBackTo={() => router.replace('/settings')} />
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <LinkRow
          rowName="Name"
          onPress={() => router.navigate('/account/name')}
          showArrow={true}
          extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ marginRight: 10, opacity: 0.5 }}>יוסף סבג</Text>
        </LinkRow>
        <LinkRow
          onPress={() => router.navigate('/account/age')}
          rowName="Age"
          showArrow={true}
          extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ marginRight: 10, opacity: 0.5 }}>25</Text>
        </LinkRow>
        <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
        <LinkRow
          onPress={() => router.navigate('/account/email')}
          rowName="Email"
          showArrow={true}
          extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ marginRight: 10, opacity: 0.5 }} numberOfLines={1}>
            yosefisabag@gmail.com
          </Text>
        </LinkRow>
        <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
        <LinkRow rowName="Export your data" showArrow={true} extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} />
        <LinkRow
          rowName="Deactivate or delete account"
          showArrow={true}
          extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        />
      </View>
      <View style={{ flex: 1 }} />
    </CustomScreen>
  );
};

export default AccountScreen;

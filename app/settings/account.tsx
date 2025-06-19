import { Text, View } from 'react-native';

import CustomScreen from 'components/CustomScreen';
import LinkRow from 'components/LinkRow';
import Title from 'components/Title';

const AccountScreen = () => {
  return (
    <CustomScreen>
      <View style={{ width: '100%' }}>
        <Title titleText="Account" />
        <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <LinkRow rowName="Name" showArrow={true} extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ marginRight: 10, opacity: 0.5 }}>יוסף סבג</Text>
        </LinkRow>
        <LinkRow rowName="Age" showArrow={true} extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ marginRight: 10, opacity: 0.5 }}>25</Text>
        </LinkRow>
        <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
        <LinkRow rowName="Email" showArrow={true} extraStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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

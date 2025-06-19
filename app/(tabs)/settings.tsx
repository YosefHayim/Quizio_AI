import CustomScreen from 'components/CustomScreen';
import LinkRow from 'components/LinkRow';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';
import { router } from 'expo-router';

const SettingsScreen = () => {
  return (
    <CustomScreen>
      <View style={{ width: '100%', flex: 1, justifyContent: 'space-around' }}>
        <LinkRow
          rowName={'Account'}
          icon={<MaterialCommunityIcons name="account" size={24} color="black" />}
          onPress={() => router.push('/settings/account', { withAnchor: true })}
        />
        <LinkRow
          rowName={'Premium'}
          icon={<MaterialIcons name="workspace-premium" size={24} color="black" />}
          onPress={() => router.push('/settings/premium')}
        />
        <LinkRow
          rowName={'Notifications'}
          icon={<MaterialIcons name="notifications-active" size={24} color="black" />}
          onPress={() => router.push('/settings/notifications')}
        />
        <View style={{ width: '100%', height: 1, backgroundColor: 'gray', opacity: 0.2 }} />
        <LinkRow rowName={'Help'} icon={<MaterialIcons name="support" size={24} color="black" />} onPress={() => router.push('/settings/help')} />
        <LinkRow
          rowName={'Report a problem'}
          icon={<MaterialIcons name="flag" size={24} color="black" />}
          onPress={() => router.push('/settings/report-a-problem')}
        />
        <View style={{ width: '100%', height: 1, backgroundColor: 'gray', opacity: 0.2 }} />
        <LinkRow
          rowName={'Log out'}
          showArrow={false}
          icon={<MaterialIcons name="logout" size={24} color="black" />}
          onPress={() => router.push('/auth/sign-up')}
        />
        <LinkRow rowName={'Legal'} />
      </View>
    </CustomScreen>
  );
};

export default SettingsScreen;

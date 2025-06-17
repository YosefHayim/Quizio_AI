import { SmallText } from 'components/Paragraph';
import { Title } from 'components/Title';
import { View, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import SettingsRow from './SettingsRow/SettingsRow';
import { CustomInput } from 'components/CustomInput';
import { CustomButton } from 'components/CustomButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from 'constants/colors';

const SettingsScreen = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [appNotification, setAppNotification] = useState(true);

  return (
    <ScrollView keyboardDismissMode="on-drag">
      <View style={{ flex: 1, gap: 16, padding: 16, marginBottom: '20%' }}>
        <Title titleText={'Customize your learning experience and account prefrences'} />
        <View style={{ backgroundColor: 'white', borderRadius: 6, padding: 10, gap: 16 }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Feather name="user" size={24} color="black" />
              <Title titleText="Profile Information" />
            </View>
            <SmallText text={'Manage your account details and prefrences'} />
            <View style={{ gap: 16, marginTop: 10 }}>
              <CustomInput placeholderText="Member Since" />
              <CustomInput placeholderText="Email Address" />
              <CustomInput placeholderText="Total Quizzes" />
              <CustomInput placeholderText="Subscription Type" />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 6, padding: 10, gap: 16 }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Feather name="bell" size={24} color="black" />
              <Title titleText="Notifications" />
            </View>
            <SmallText text={'Manage how you receive updates and notifications'} />
          </View>

          <SettingsRow
            state={emailNotification}
            setState={setEmailNotification}
            explanationText="Recieve quiz updates and learning tips via email"
            labelText="Email Notifications"
          />
          <SettingsRow
            state={appNotification}
            setState={setAppNotification}
            explanationText="Get App notification for quiz reminders"
            labelText="Push Notificiations"
          />
          <SettingsRow
            state={weeklyReport}
            setState={setWeeklyReport}
            labelText="Weekly Report"
            explanationText="Receive a summary of your learning progress"
          />
        </View>
      </View>
      <CustomButton
        icon={<MaterialIcons name="done" size={24} color="white" />}
        styleText={{ fontWeight: 'bold', color: 'white' }}
        style={{
          padding: 10,
          backgroundColor: colors.red,
          borderRadius: 6,
          marginHorizontal: 12,
        }}
        buttonText="Save Preferences"
        onPress={() => console.log('save')}
      />
    </ScrollView>
  );
};

export default SettingsScreen;

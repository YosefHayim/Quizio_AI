import { ScrollView, View } from 'react-native';
import { RecentQuizSection } from './RecentQuizSection';
import { ScreenHeader } from 'components/ScreenHeader';
import { GroupStatsSection } from './GroupStatsSection';
import { CreateNewQuizSection } from './CreateNewQuizSection';
import { ProgressOverviewSection } from './ProgressOverviewSection';
import { CustomButton } from 'components/CustomButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DashboardScreen = () => {
  return (
    <ScrollView keyboardDismissMode="on-drag">
      <View style={{ gap: 16, padding: 16, marginBottom: '20%' }}>
        <ScreenHeader title="Welcome back!" paragraph=" Ready to learn something new today?" />
        <GroupStatsSection />
        <CreateNewQuizSection />
        <ProgressOverviewSection />
        <RecentQuizSection />
        <CustomButton
          buttonText="View All History"
          icon={<MaterialIcons name="history-toggle-off" size={24} color="white" />}
          onPress={() => console.log('navigate to history page')}
          style={{ backgroundColor: 'red', padding: 8, borderRadius: 6 }}
          styleText={{ color: 'white', fontWeight: 'bold' }}
        />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

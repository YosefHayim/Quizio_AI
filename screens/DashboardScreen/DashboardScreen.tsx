import { ScrollView, View } from 'react-native';
import { RecentQuizSection } from './RecentQuizSection';
import { ScreenHeader } from 'components/ScreenHeader';
import { GroupStatsSection } from './GroupStatsSection';
import { CreateNewQuizSection } from './CreateNewQuizSection';
import { ProgressOverviewSection } from './ProgressOverviewSection';

const DashboardScreen = () => {
  return (
    <ScrollView>
      <View style={{ gap: 16, padding: 16 }}>
        <ScreenHeader title="Welcome back!" paragraph=" Ready to learn something new today?" />
        <GroupStatsSection />
        <CreateNewQuizSection />
        <ProgressOverviewSection />
        <RecentQuizSection />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

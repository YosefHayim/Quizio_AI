import { StatCard } from 'components/StatCard';
import { ScrollView, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Title } from 'components/Title';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomButton } from 'components/CustomButton';
import { ProgressBar } from 'components/ProgressBar';
import { SmallText } from 'components/SmallText';
import RecentQuizCard from './RecentQuizCard/RecentQuizCard';

const DashboardScreen = () => {
  return (
    <ScrollView>
      <View style={{ gap: 16, padding: 16 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Title titleText="Welcome Back" style={{ fontWeight: 'bold' }} />
          <SmallText text="Ready to learn something new today?" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 16 }}>
          <StatCard statCardText="+2 from last week" statCardTitle="Total Quizzes" statValue={24} icon={<Feather name="book-open" size={24} color="black" />} />
          <StatCard
            statCardText="+5% from last week"
            statCardTitle="Average Score"
            statValue={85}
            icon={<Ionicons name="trophy-outline" size={24} color="black" />}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 16 }}>
          <StatCard statCardText="This week" statCardTitle="Study time" statValue={180} icon={<EvilIcons name="clock" size={24} color="black" />} />
          <StatCard statCardText="days in a row" statCardTitle="Current Streak" statValue={7} icon={<Entypo name="line-graph" size={24} color="black" />} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
            <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
              <AntDesign name="youtube" size={24} color="red" />
              <Title titleText="Create New Quiz" style={{ fontWeight: 'bold' }} />
            </View>
            <SmallText text="Turn any YouTube video into an interactive learning experience" />
            <CustomButton
              buttonText="Create New Quiz"
              style={{ backgroundColor: 'red', padding: 8, borderRadius: 6 }}
              onPress={() => console.log('placeholder click')}
              styleText={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
            />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
          <Title titleText="Progress Overview" style={{ fontWeight: 'bold' }} />
          <SmallText text="Your learning journey this month" />
          <View style={{ gap: 16 }}>
            <View style={{ gap: 4 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <SmallText text="Weekly Goal" />
                <SmallText text="7/10 quizzes" />
              </View>
              <ProgressBar precentOfProgress={10} />
            </View>
            <View style={{ gap: 4 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <SmallText text="Average Score" />
                <SmallText text="85" />
              </View>
              <ProgressBar precentOfProgress={85} />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Title titleText="Recent Quizzes" style={{ fontWeight: 'bold' }} />
            <SmallText text="Your latest learning activities" />
          </View>
          <RecentQuizCard date={'20-15-2025'} numberOfQuestions={10} quizScore={90} quizTitle="Introudction to react hooks" />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

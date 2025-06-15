import { StatCard } from 'components/StatCard';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
const GroupStatsSection = () => {
  return (
    <>
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
    </>
  );
};

export default GroupStatsSection;

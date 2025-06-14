import { StatCard } from 'components/StatCard';
import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardScreen = () => {
  return (
    <View style={{ gap: 16, padding: 16 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>Welcome back!</Text>
        <Text>Ready to learn something new today?</Text>
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
    </View>
  );
};

export default DashboardScreen;

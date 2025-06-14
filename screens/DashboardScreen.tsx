import { StatCard } from 'components/StatCard';
import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Title } from 'components/Title';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomButton } from 'components/CustomButton';
import { ProgressBar } from 'components/ProgressBar';

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

      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
          <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
            <AntDesign name="youtube" size={24} color="red" />
            <Title titleText="Create New Quiz" style={{ fontWeight: 'bold' }} />
          </View>
          <Text style={{ fontSize: 10 }}>Turn any YouTube video into an interactive learning experience</Text>
          <CustomButton
            buttonText="Create New Quiz"
            style={{ backgroundColor: 'red', padding: 4, borderRadius: 6 }}
            onPress={() => console.log('placeholder click')}
            styleText={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
        <Title titleText="Progress Overview" style={{ fontWeight: 'bold' }} />
        <Text style={{ fontSize: 10 }}>Your learning journey this month</Text>
        <View style={{ gap: 16 }}>
          <View style={{ gap: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10 }}>Weekly Goal</Text>
              <Text style={{ fontSize: 10 }}>7/10 quizzes</Text>
            </View>
            <ProgressBar precentOfProgress={10} />
          </View>
          <View style={{ gap: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10 }}>Average Score</Text>
              <Text style={{ fontSize: 10 }}>85</Text>
            </View>
            <ProgressBar precentOfProgress={85} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardScreen;

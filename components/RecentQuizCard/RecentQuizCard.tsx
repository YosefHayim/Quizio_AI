import { SmallText } from 'components/SmallText';
import { colors } from 'constants/colors';
import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

interface RecentQuizCardProps {
  quizTitle: string;
  date: Date | string;
  quizScore: number;
  numberOfQuestions: number;
  difficultyLevel: 'Easy' | 'Medium' | 'Hard';
  quizDuration: number;
}

const RecentQuizCard: React.FC<RecentQuizCardProps> = ({ quizTitle, date, quizScore, numberOfQuestions, difficultyLevel, quizDuration }) => {
  const mintues = quizDuration / 60;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        padding: 10,
        alignItems: 'center',
        gap: 4,
      }}>
      <View style={[{ gap: 4 }, difficultyStyle[difficultyLevel]]}>
        <SmallText text={difficultyLevel} style={{ color: 'white', fontWeight: 'bold' }} />
      </View>
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 12 }} numberOfLines={1}>
          {quizTitle}
        </Text>
        <View>
          <View style={{ flexDirection: 'row', gap: 4, justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="calendar" size={16} color="black" />
            <SmallText text={`${date}`} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4 }}>
            <Text style={{ textAlign: 'right', fontWeight: 'bold', color: 'red' }}>{quizScore}</Text>
            <MaterialIcons name="grade" size={16} color="black" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4 }}>
            <Text style={{ fontWeight: 'bold' }}>{numberOfQuestions}</Text>
            <FontAwesome6 name="question-circle" size={16} color="black" />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4 }}>
          <Text>{mintues + 'm'}</Text>
          <Ionicons name="timer-outline" size={16} color="black" />
        </View>
      </View>
    </View>
  );
};

export default RecentQuizCard;

const difficultyStyle = {
  Easy: {
    backgroundColor: colors.green,
    padding: 8,
    borderRadius: 1000,
  },
  Medium: {
    backgroundColor: colors.yellow,
    padding: 8,
    borderRadius: 1000,
  },
  Hard: {
    backgroundColor: colors.red,
    padding: 8,
    borderRadius: 1000,
  },
};

export { default as RecentQuizCard } from './RecentQuizCard';

import { SmallText } from 'components/SmallText';
import { Text, View } from 'react-native';

interface RecentQuizCardProps {
  quizTitle: string;
  date: Date | string;
  quizScore: number;
  numberOfQuestions: number;
}

const RecentQuizCard: React.FC<RecentQuizCardProps> = ({ quizTitle, date, quizScore, numberOfQuestions }) => {
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
      }}>
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 12 }}>{quizTitle}</Text>
        <SmallText text={`Completed on ${date}`} />
      </View>

      <View style={{ gap: 4 }}>
        <Text style={{ textAlign: 'right', fontWeight: 'bold', color: 'red' }}>{quizScore}</Text>
        <SmallText text={`${numberOfQuestions} Questions`} />
      </View>
    </View>
  );
};

export default RecentQuizCard;

export { default as RecentQuizCard } from './RecentQuizCard';

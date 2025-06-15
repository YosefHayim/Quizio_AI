import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { View } from 'react-native';
import { RecentQuizCard } from './RecentQuizCard';

const RecentQuizSection = () => {
  return (
    <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Title titleText="Recent Quizzes" style={{ fontWeight: 'bold' }} />
        <SmallText text="Your latest learning activities" />
      </View>
      <RecentQuizCard date={'01-07-2000'} numberOfQuestions={10} quizScore={90} quizTitle="Introudction to react hooks" />
      <RecentQuizCard date={'21-15-2025'} numberOfQuestions={5} quizScore={74} quizTitle="JavaScript ES6 Features" />
      <RecentQuizCard date={'32-11-2023'} numberOfQuestions={8} quizScore={50} quizTitle="CSS Grid layout" />
    </View>
  );
};

export default RecentQuizSection;

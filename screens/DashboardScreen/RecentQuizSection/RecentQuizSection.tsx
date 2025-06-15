import { RecentQuizCard } from 'components/RecentQuizCard';
import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { View } from 'react-native';

const RecentQuizSection = () => {
  return (
    <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Title titleText="Recent Quizzes" style={{ fontWeight: 'bold' }} />
        <SmallText text="Your latest learning activities" />
      </View>
      <View style={{ gap: 16 }}>
        <RecentQuizCard
          date={'01-07-2000'}
          numberOfQuestions={10}
          quizScore={90}
          quizTitle="Introudction to react hooks"
          difficultyLevel="Easy"
          quizDuration={540}
        />
        <RecentQuizCard
          date={'21-15-2025'}
          numberOfQuestions={5}
          quizScore={74}
          quizTitle="JavaScript ES6 Features"
          difficultyLevel="Hard"
          quizDuration={120}
        />
        <RecentQuizCard date={'32-11-2023'} numberOfQuestions={8} quizScore={50} quizTitle="CSS Grid layout" difficultyLevel="Medium" quizDuration={60} />
      </View>
    </View>
  );
};

export default RecentQuizSection;

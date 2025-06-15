import { RecentQuizCard } from 'components/RecentQuizCard';
import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { useState } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';
import { Searchbar } from 'react-native-paper';

const mockQuizzes = [
  {
    date: '32-11-2023',
    numberOfQuestions: 8,
    quizScore: 50,
    quizTitle: 'CSS Grid layout',
    difficultyLevel: 'Medium',
    quizDuration: 60,
  },
  {
    date: '28-10-2023',
    numberOfQuestions: 10,
    quizScore: 80,
    quizTitle: 'JavaScript Basics',
    difficultyLevel: 'Easy',
    quizDuration: 45,
  },
  {
    date: '12-09-2023',
    numberOfQuestions: 12,
    quizScore: 70,
    quizTitle: 'React Props and State',
    difficultyLevel: 'Medium',
    quizDuration: 50,
  },
  {
    date: '05-08-2023',
    numberOfQuestions: 15,
    quizScore: 90,
    quizTitle: 'TypeScript Interfaces',
    difficultyLevel: 'Hard',
    quizDuration: 75,
  },
  {
    date: '01-07-2023',
    numberOfQuestions: 7,
    quizScore: 60,
    quizTitle: 'HTML Forms',
    difficultyLevel: 'Easy',
    quizDuration: 30,
  },
  {
    date: '20-06-2023',
    numberOfQuestions: 9,
    quizScore: 55,
    quizTitle: 'Flexbox Mastery',
    difficultyLevel: 'Medium',
    quizDuration: 40,
  },
  {
    date: '11-05-2023',
    numberOfQuestions: 6,
    quizScore: 45,
    quizTitle: 'Node.js Basics',
    difficultyLevel: 'Medium',
    quizDuration: 35,
  },
  {
    date: '30-04-2023',
    numberOfQuestions: 13,
    quizScore: 85,
    quizTitle: 'MongoDB Fundamentals',
    difficultyLevel: 'Hard',
    quizDuration: 90,
  },
];

const QuizHistoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView onScrollBeginDrag={Keyboard.dismiss}>
      <View style={{ gap: 16, padding: 16, marginBottom: 25 }}>
        <SmallText text={'Track your learning progress and review past quizzes'} />
        <View>
          <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} style={{ borderRadius: 6, backgroundColor: colors.gray }} />
        </View>
        {mockQuizzes.map((quizCard) => (
          <RecentQuizCard key={quizCard.quizTitle} {...quizCard} />
        ))}
      </View>
    </ScrollView>
  );
};

export default QuizHistoryScreen;

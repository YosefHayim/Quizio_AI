import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import Card from 'components/Card';
import CustomButton from 'components/CustomButton';
import CustomHeader from 'components/CustomHeader';
import CustomScreen from 'components/CustomScreen';
import Paragraph from 'components/Paragraph';
import { ProgressBar } from 'react-native-paper';
import { router } from 'expo-router';

const quizQuestions = [
  {
    question: 'What is the capital of France?',
    answers: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    answers: ['Leo Tolstoy', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: ['Atlantic Ocean', 'Arctic Ocean', 'Indian Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    question: 'What is 5 x 6?',
    answers: ['30', '25', '35', '20'],
    correctAnswer: '30',
  },
  {
    question: 'Which language is primarily spoken in Brazil?',
    answers: ['Spanish', 'Portuguese', 'French', 'Italian'],
    correctAnswer: 'Portuguese',
  },
  {
    question: 'Which gas do plants absorb from the atmosphere?',
    answers: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'What is the boiling point of water at sea level?',
    answers: ['90°C', '80°C', '100°C', '70°C'],
    correctAnswer: '100°C',
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'In which continent is the Sahara Desert located?',
    answers: ['Asia', 'Australia', 'Africa', 'South America'],
    correctAnswer: 'Africa',
  },
];

const PlayQuizScreen = () => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [userScore, setUserScore] = useState(0);

  const handleUserAnswer = (answer: string) => {
    if (answer === quizQuestions[currentQuestionNumber].correctAnswer) {
      setUserScore((prev) => (prev += 1));
      console.log('User current score: ', userScore);
    }
    setCurrentQuestionNumber((prev) => (prev += 1));
  };

  if (currentQuestionNumber === quizQuestions.length) {
    return (
      <CustomScreen>
        <View style={{ flex: 1, width: '100%' }}>
          <CustomHeader
            headerName="Quiz Results"
            navigateBackTo={() => router.replace('dashboard')}
          />
          <Text>userScore: {userScore}</Text>
          <Text>wrong guesses: {quizQuestions.length - userScore}</Text>
          <CustomButton
            buttonType="confirmation"
            onPress={() => console.log('')}
            buttonText="Retry Quiz"
          />
        </View>
      </CustomScreen>
    );
  }

  return (
    <CustomScreen>
      <View style={{ width: '100%' }}>
        <CustomHeader
          headerName="Play Quiz Page"
          navigateBackTo={() => router.navigate('/dashboard')}
        />
        <View>
          <ProgressBar
            progress={currentQuestionNumber / quizQuestions.length}
            color="black"
            style={{ backgroundColor: 'white' }}
            fillStyle={{ backgroundColor: 'black' }}
          />
        </View>
      </View>
      <View style={{ flex: 1, width: '100%', justifyContent: 'space-evenly' }}>
        <Card>
          <View style={{ height: 200, justifyContent: 'center' }}>
            <Paragraph
              text={quizQuestions[currentQuestionNumber].question}
              extraStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}
            />
          </View>
        </Card>
        {quizQuestions[currentQuestionNumber].answers.map((answer) => (
          <CustomButton
            key={answer}
            onPress={() => handleUserAnswer(answer)}
            extraStyle={{ backgroundColor: 'black' }}
            buttonType="confirmation"
            buttonText={answer}
          />
        ))}
      </View>
    </CustomScreen>
  );
};

export default PlayQuizScreen;

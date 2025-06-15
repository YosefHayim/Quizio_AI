import { ScreenHeader } from 'components/ScreenHeader';
import { ScrollView, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CustomInput } from 'components/CustomInput';
import { SmallText } from 'components/SmallText';
import { CustomButton } from 'components/CustomButton';
import { ChooseAmountOfQuestions } from './ChooseAmountOfQuestions';
import { ChooseDifficulty } from './ChooseDifficulty';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Title } from 'components/Title';
import StepHowItWork from '../StepHowItWork/StepHowItWork';
import Feather from '@expo/vector-icons/Feather';

const CreateQuizSection = () => {
  const [difficultyDialogVisible, setDifficultyDialogVisible] = useState(false);
  const [questionDialogVisible, setQuestionDialogVisible] = useState(false);

  const [selectedDifficulity, setSelectedDifficulity] = useState('easy');
  const [selectedQuestion, setSelectedQuestion] = useState('5');

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 20, gap: 10 }}>
        <ScreenHeader
          title="Quiz Configuration"
          paragraph="Set up your personalized learning experience"
          icon={<MaterialIcons name="settings-suggest" size={24} color="red" />}
        />
        <View style={{ borderWidth: 1, padding: 20, gap: 6, borderRadius: 6 }}>
          <Title titleText="Video Preview" style={{ fontWeight: 'bold', textAlign: 'center' }} />
          <SmallText text={`Preview of the video you'll create a quiz from`} style={{ textAlign: 'center' }} />
          <View style={{ borderWidth: 1, borderStyle: 'dashed', padding: 10, gap: 4, alignItems: 'center' }}>
            <MaterialIcons name="ondemand-video" size={24} color="gray" />
            <SmallText text={`Enter a YouTube URL to see video preview`} style={{ textAlign: 'center' }} />
          </View>
        </View>

        <CustomInput placeholderText="https://www.youtube.com/watch?v=..." />
        <SmallText text="URL of the YouTube video you want to create a quiz" />

        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <CustomButton
            onPress={() => setQuestionDialogVisible(true)}
            styleText={{ fontWeight: 'bold' }}
            style={{ borderWidth: 1, borderRadius: 6, padding: 4, borderColor: 'gray', alignItems: 'center' }}
            buttonText={`Questions: ${selectedQuestion}`}
            icon={<MaterialCommunityIcons name="head-question" size={24} color="red" />}
          />
          <CustomButton
            onPress={() => setDifficultyDialogVisible(true)}
            styleText={{ fontWeight: 'bold' }}
            style={{ borderWidth: 1, borderRadius: 6, padding: 4, borderColor: 'gray', alignItems: 'center' }}
            buttonText={`Difficulty: ${selectedDifficulity.charAt(0).toUpperCase() + selectedDifficulity.slice(1)}`}
            icon={<MaterialCommunityIcons name="stairs-up" size={24} color="red" />}
          />
        </View>

        <ChooseAmountOfQuestions
          questionDialogVisible={questionDialogVisible}
          selectedQuestion={selectedQuestion}
          setQuestionDialogVisible={setQuestionDialogVisible}
          setSelectedQuestion={setSelectedQuestion}
        />
        <ChooseDifficulty
          difficultyDialogVisible={difficultyDialogVisible}
          selectedDifficulity={selectedDifficulity}
          setDifficultyDialogVisible={setDifficultyDialogVisible}
          setSelectedDifficulity={setSelectedDifficulity}
        />
        <CustomButton
          onPress={() => console.log('create quiz')}
          style={{ backgroundColor: 'red', padding: 6, borderRadius: 6 }}
          styleText={{ color: 'white', fontWeight: 'bold' }}
          buttonText="Create"
          icon={<Entypo name="controller-play" size={24} color="white" />}
        />
        <View style={{ gap: 4 }}>
          <Title titleText="How It Works" style={{ textAlign: 'center', fontWeight: 'bold' }} />
          <SmallText text="Our AI-powered system creates personalized quizzes in seconds" style={{ textAlign: 'center' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <StepHowItWork stepNumber={1} stepText="Paste URL" displayArrow={true} />
            <StepHowItWork stepNumber={2} stepText="AI Analysis" displayArrow={true} />
            <StepHowItWork stepNumber={3} stepText="Take Quiz" displayArrow={false} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateQuizSection;

import { ScreenHeader } from 'components/ScreenHeader';
import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CustomInput } from 'components/CustomInput';
import { SmallText } from 'components/SmallText';
import { CustomButton } from 'components/CustomButton';
import { ChooseAmountOfQuestions } from './ChooseAmountOfQuestions';
import { ChooseDifficulty } from './ChooseDifficulty';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CreateQuizSection = () => {
  const [difficultyDialogVisible, setDifficultyDialogVisible] = useState(false);
  const [questionDialogVisible, setQuestionDialogVisible] = useState(false);

  const [selectedDifficulity, setSelectedDifficulity] = useState('easy');
  const [selectedQuestion, setSelectedQuestion] = useState('5');

  return (
    <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
      <ScreenHeader
        title="Quiz Configuration"
        paragraph="Set up your personalized learning experience"
        icon={<MaterialIcons name="settings-suggest" size={24} color="red" />}
      />
      <CustomInput placeholderText="https://www.youtube.com/watch?v=..." />
      <SmallText text="URL of the YouTube video you want to create a quiz" />

      <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <CustomButton
          onPress={() => setQuestionDialogVisible(true)}
          styleText={{ fontWeight: 'bold' }}
          style={{ borderWidth: 1, borderRadius: 4, padding: 3, borderColor: 'gray', alignItems: 'center' }}
          buttonText={`Questions: ${selectedQuestion}`}
          icon={<MaterialCommunityIcons name="head-question" size={24} color="red" />}
        />
        <CustomButton
          onPress={() => setDifficultyDialogVisible(true)}
          styleText={{ fontWeight: 'bold' }}
          style={{ borderWidth: 1, borderRadius: 4, padding: 3, borderColor: 'gray', alignItems: 'center' }}
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
    </View>
  );
};

export default CreateQuizSection;

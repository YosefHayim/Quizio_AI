import { Picker } from '@react-native-picker/picker';
import { CustomButton } from 'components/CustomButton';
import { Portal, Dialog } from 'react-native-paper';

interface ChooseAmountOfQuestionsProps {
  selectedQuestion: string;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<string>>;
  questionDialogVisible: boolean;
  setQuestionDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseAmountOfQuestions: React.FC<ChooseAmountOfQuestionsProps> = ({
  selectedQuestion,
  setSelectedQuestion,
  questionDialogVisible,
  setQuestionDialogVisible,
}) => {
  return (
    <Portal>
      <Dialog visible={questionDialogVisible} onDismiss={() => setQuestionDialogVisible(false)} style={{ borderRadius: 8, backgroundColor: 'white' }}>
        <Dialog.Title style={{ fontSize: 12 }}>Choose amount of questions to create</Dialog.Title>
        <Dialog.Content>
          <Picker selectedValue={selectedQuestion} onValueChange={(itemValue) => setSelectedQuestion(itemValue)}>
            <Picker.Item label="5 Questions" value={'5'} />
            <Picker.Item label="10 Questions" value={'10'} />
            <Picker.Item label="15 Questions" value={'15'} />
            <Picker.Item label="20 Questions" value={'20'} />
          </Picker>
        </Dialog.Content>
        <Dialog.Actions>
          <CustomButton onPress={() => setQuestionDialogVisible(false)} buttonText="Done" />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChooseAmountOfQuestions;

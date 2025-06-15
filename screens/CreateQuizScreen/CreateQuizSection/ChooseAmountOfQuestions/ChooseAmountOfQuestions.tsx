import { Picker } from '@react-native-picker/picker';
import { CustomButton } from 'components/CustomButton';
import { Portal, Dialog } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const data = [
  { label: '5 Questions', value: '5' },
  { label: '10 Questions', value: '10' },
  { label: '15 Questions', value: '15' },
  { label: '20 Questions', value: '20' },
];
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
      <Dialog visible={questionDialogVisible} onDismiss={() => setQuestionDialogVisible(false)} style={{ borderRadius: 6, backgroundColor: 'white' }}>
        <Dialog.Title style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Amount of questions</Dialog.Title>
        <Dialog.Content>
          <Picker selectedValue={selectedQuestion} onValueChange={(itemValue) => setSelectedQuestion(itemValue)}>
            {data.map((option) => (
              <Picker.Item key={option.label} label={option.label} value={option.value} />
            ))}
          </Picker>
        </Dialog.Content>
        <Dialog.Actions>
          <CustomButton
            style={{ backgroundColor: 'red', padding: 6, borderRadius: 6 }}
            styleText={{ color: 'white', fontWeight: 'bold' }}
            onPress={() => setQuestionDialogVisible(false)}
            buttonText="Done"
            icon={<MaterialIcons name="done" size={24} color="white" />}
          />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChooseAmountOfQuestions;

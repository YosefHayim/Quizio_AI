import { Picker } from '@react-native-picker/picker';
import { CustomButton } from 'components/CustomButton';
import { Portal, Dialog } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const data = [
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
];

interface ChooseDifficultyProps {
  selectedDifficulity: string;
  setSelectedDifficulity: React.Dispatch<React.SetStateAction<string>>;
  difficultyDialogVisible: boolean;
  setDifficultyDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseDifficulty: React.FC<ChooseDifficultyProps> = ({
  selectedDifficulity,
  setSelectedDifficulity,
  difficultyDialogVisible,
  setDifficultyDialogVisible,
}) => {
  return (
    <Portal>
      <Dialog visible={difficultyDialogVisible} onDismiss={() => setDifficultyDialogVisible(false)} style={{ borderRadius: 6, backgroundColor: 'white' }}>
        <Dialog.Title style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Choose Difficulty</Dialog.Title>
        <Dialog.Content>
          <Picker selectedValue={selectedDifficulity} onValueChange={(itemValue) => setSelectedDifficulity(itemValue)}>
            {data.map((option) => (
              <Picker.Item key={option.label} label={option.label} value={option.value} />
            ))}
          </Picker>
        </Dialog.Content>
        <Dialog.Actions>
          <CustomButton
            style={{ backgroundColor: 'red', padding: 6, borderRadius: 6 }}
            styleText={{ color: 'white', fontWeight: 'bold' }}
            onPress={() => setDifficultyDialogVisible(false)}
            buttonText="Done"
            icon={<MaterialIcons name="done" size={24} color="white" />}
          />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChooseDifficulty;

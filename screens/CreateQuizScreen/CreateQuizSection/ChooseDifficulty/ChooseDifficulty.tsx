import { Picker } from '@react-native-picker/picker';
import { CustomButton } from 'components/CustomButton';
import { View } from 'react-native';
import { Portal, Dialog } from 'react-native-paper';

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
      <Dialog visible={difficultyDialogVisible} onDismiss={() => setDifficultyDialogVisible(false)} style={{ borderRadius: 8, backgroundColor: 'white' }}>
        <Dialog.Title style={{ fontSize: 12 }}>Choose Difficulty</Dialog.Title>
        <Dialog.Content>
          <Picker selectedValue={selectedDifficulity} onValueChange={(itemValue) => setSelectedDifficulity(itemValue)}>
            <Picker.Item label="Easy" value="easy" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Hard" value="hard" />
          </Picker>
        </Dialog.Content>
        <Dialog.Actions>
          <CustomButton onPress={() => setDifficultyDialogVisible(false)} buttonText="Done" />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChooseDifficulty;

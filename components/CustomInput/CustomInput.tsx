import { Text, TextInput, View } from 'react-native';

interface CustomInputProps {
  placeholderText: string;
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholderText, label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput autoCorrect={false} placeholder={placeholderText} />
    </View>
  );
};

export default CustomInput;

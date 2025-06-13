import { KeyboardTypeOptions, TextInput } from 'react-native';

interface CustomInputProps {
  placeholderText: string;
  cb: () => void;
  type: KeyboardTypeOptions;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholderText, type, cb }) => {
  return <TextInput autoCorrect={false} autoCapitalize="none" placeholder={placeholderText} keyboardType={type} onChangeText={cb} />;
};

export default CustomInput;

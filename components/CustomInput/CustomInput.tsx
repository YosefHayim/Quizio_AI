import { TextInput } from 'react-native';

interface TextInputProps {
  placeholderText: string;
  style?: string;
}

const CustomInput: React.FC<TextInputProps> = ({ placeholderText, style }) => {
  return <TextInput placeholder={placeholderText} autoCorrect={false} className={style} />;
};

export default CustomInput;

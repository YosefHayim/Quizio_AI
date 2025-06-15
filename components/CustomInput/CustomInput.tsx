import { StyleProp, TextInput, TextStyle, View } from 'react-native';

interface TextInputProps {
  placeholderText: string;
  style?: StyleProp<TextStyle>;
  state: string;
  handleInputFn: (v: string) => void;
}

const CustomInput: React.FC<TextInputProps> = ({ placeholderText, style, handleInputFn, state }) => {
  return (
    <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 6, padding: 4, gap: 4 }}>
      <TextInput placeholder={placeholderText} autoCorrect={false} style={style} onChangeText={handleInputFn} value={state} />
    </View>
  );
};

export default CustomInput;

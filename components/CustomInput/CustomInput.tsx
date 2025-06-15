import { StyleProp, TextInput, TextStyle, View } from 'react-native';

interface TextInputProps {
  placeholderText: string;
  style?: StyleProp<TextStyle>;
}

const CustomInput: React.FC<TextInputProps> = ({ placeholderText, style }) => {
  return (
    <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 4, padding: 4 }}>
      <TextInput placeholder={placeholderText} autoCorrect={false} style={style} />
    </View>
  );
};

export default CustomInput;

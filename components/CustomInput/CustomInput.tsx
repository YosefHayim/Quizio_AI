import { colors } from 'constants/colors';
import { StyleProp, TextInput, TextStyle, View } from 'react-native';

interface TextInputProps {
  placeholderText: string;
  style?: StyleProp<TextStyle>;
}

const CustomInput: React.FC<TextInputProps> = ({ placeholderText, style }) => {
  return (
    <View style={{ borderColor: colors.gray, borderWidth: 1, borderRadius: 6, padding: 4, gap: 4 }}>
      <TextInput placeholder={placeholderText} autoCorrect={false} style={style} />
    </View>
  );
};

export default CustomInput;

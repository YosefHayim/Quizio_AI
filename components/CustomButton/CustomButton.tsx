import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, onPress, style, styleText }) => {
  return (
    <View>
      <Pressable onPress={onPress} style={style}>
        <Text style={styleText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

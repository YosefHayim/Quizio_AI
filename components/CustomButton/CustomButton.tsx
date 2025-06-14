import { Pressable, StyleProp, Text, TextStyle } from 'react-native';

interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

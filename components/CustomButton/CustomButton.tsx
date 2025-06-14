import { Pressable, Text } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, buttonText }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

import { Pressable, Text, View } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, buttonText }) => {
  return (
    <>
      <View>
        <Pressable onPress={onPress}>
          <Text>{buttonText}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CustomButton;

import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <TouchableOpacity
      className={`bg-blue_sky w-full items-center justify-center rounded-md p-3`}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text className={`text-paper_white text-xl font-semibold`}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

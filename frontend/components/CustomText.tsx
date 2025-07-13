import { Text } from 'react-native';

interface CustomTextProps {
  text: string;
  extraStyle?: string;
}

const CustomText: React.FC<CustomTextProps> = (props) => {
  return <Text className={`font-poppins_100 w-full ${props.extraStyle}`}>{props.text}</Text>;
};

export default CustomText;

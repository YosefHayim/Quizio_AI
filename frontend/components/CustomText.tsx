import { Text } from 'react-native';

const CustomText: React.FC<{ text: string }> = ({ text }) => {
  return <Text style={{ fontFamily: 'poppins', fontSize: 18, fontWeight: 600 }}>{text}</Text>;
};

export default CustomText;

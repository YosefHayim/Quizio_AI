import { Text } from 'react-native';

interface SmallTextProps {
  text: string;
}

const SmallText: React.FC<SmallTextProps> = ({ text }) => {
  return <Text style={{ fontSize: 10 }}>{text}</Text>;
};

export default SmallText;

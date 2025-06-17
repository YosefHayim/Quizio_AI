import { Text } from 'react-native';

interface ParagraphProps {
  text: string | number;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <Text style={{ fontWeight: 'light', color: 'white', fontSize: 15 }}>{text}</Text>;
};

export default Paragraph;

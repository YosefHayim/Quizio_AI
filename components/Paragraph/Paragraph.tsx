import { Text } from 'react-native';

interface ParagraphProps {
  text: string | number;
  colorText?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, colorText }) => {
  return <Text style={{ fontWeight: 'light', color: colorText ? colorText : 'white', fontSize: 15 }}>{text}</Text>;
};

export default Paragraph;

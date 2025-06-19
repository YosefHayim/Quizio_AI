import { StyleProp, Text, TextStyle } from 'react-native';
interface ParagraphProps {
  text: string | number;
  colorText?: string;
  extraStyle?: StyleProp<TextStyle>;
}

const Paragraph: React.FC<ParagraphProps> = ({ ...props }) => {
  return <Text style={[{ fontWeight: 'light', color: props.colorText ? props.colorText : 'black', fontSize: 15 }, props.extraStyle]}>{props.text}</Text>;
};

export default Paragraph;

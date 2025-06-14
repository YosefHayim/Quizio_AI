import { StyleProp, Text, TextStyle } from 'react-native';

interface TitleProps {
  titleText: string;
  style?: StyleProp<TextStyle>;
}

const Title: React.FC<TitleProps> = ({ titleText, style }) => {
  return <Text style={style}>{titleText}</Text>;
};

export default Title;

import { StyleProp, Text, TextStyle } from 'react-native';

interface TitleProps {
  titleText: string;
  extraStyle?: StyleProp<TextStyle>;
}

const Title: React.FC<TitleProps> = ({ titleText, extraStyle }) => {
  return <Text style={[{ fontWeight: 'bold', color: 'white', fontSize: 30 }, extraStyle]}>{titleText}</Text>;
};

export default Title;

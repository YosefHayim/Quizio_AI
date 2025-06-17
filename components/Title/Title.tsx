import { Text } from 'react-native';

interface TitleProps {
  titleText: string;
}

const Title: React.FC<TitleProps> = ({ titleText }) => {
  return <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>{titleText}</Text>;
};

export default Title;

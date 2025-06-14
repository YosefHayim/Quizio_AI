import { Text } from 'react-native';

interface TitleProps {
  titleText: string;
  style?: string;
}

const Title: React.FC<TitleProps> = ({ titleText, style }) => {
  return <Text className={style}>{titleText}</Text>;
};

export default Title;

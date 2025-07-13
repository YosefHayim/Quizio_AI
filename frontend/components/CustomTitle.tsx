import { Text } from 'react-native';

interface CustomTitleProps {
  titleText: string;
  extraStyle?: string;
}

const CustomTitle: React.FC<CustomTitleProps> = (props) => {
  return (
    <Text className={`text-center text-3xl font-bold text-black ${props.extraStyle}`}>
      {props.titleText}
    </Text>
  );
};

export default CustomTitle;

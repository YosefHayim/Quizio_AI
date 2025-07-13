import { StyleProp, Text, TextStyle } from 'react-native';

interface CustomTitleProps {
  titleText: string;
  extraStyle?: StyleProp<TextStyle>;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ titleText, extraStyle }) => {
  return (
    <Text
      style={[
        { fontWeight: 'bold', color: 'black', fontSize: 25, textAlign: 'center' },
        extraStyle,
      ]}>
      {titleText}
    </Text>
  );
};

export default CustomTitle;

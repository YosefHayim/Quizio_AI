import { StyleProp, TextStyle, Text as RNText, StyleSheet } from 'react-native';

interface SmallTextProps {
  text: string | number;
  style?: StyleProp<TextStyle>; // Optional is better for usability
}

const SmallText: React.FC<SmallTextProps> = ({ text, style }) => {
  const flattenedStyle = StyleSheet.flatten(style);

  return <RNText style={[flattenedStyle, { fontSize: 10 }]}>{text}</RNText>;
};

export default SmallText;

import { StyleProp, Text, TextStyle } from 'react-native';

interface CustomTextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = (props) => {
  return (
    <Text style={[props.style, { fontFamily: 'poppins', fontSize: 18, fontWeight: 600 }]}>
      {props.text}
    </Text>
  );
};

export default CustomText;

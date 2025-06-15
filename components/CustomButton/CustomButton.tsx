import { ReactNode } from 'react';
import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
  icon: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, onPress, style, styleText, icon }) => {
  return (
    <View>
      <Pressable onPress={onPress} style={style}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems: 'center' }}>
          {icon}
          <Text style={styleText}>{buttonText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

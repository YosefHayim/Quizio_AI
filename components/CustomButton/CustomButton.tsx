import { colors } from 'constants/colors';
import { ReactNode } from 'react';
import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

const getButtonStyleByType = (buttonType: string) => {
  switch (buttonType) {
    case 'success':
      return { backgroundColor: colors.correctOrConfirm };

    case 'warning':
      return { backgroundColor: colors.wrongOrWarning };

    case 'confirmation':
      return { backgroundColor: colors.activeButtonBackground };

    default:
      return { backgroundColor: colors.optionButtonBackground, borderColor: colors.defaultborderButton, borderWidth: 1 };
  }
};

interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  buttonType: 'confirmation' | 'success' | 'warning' | 'default';
  style: StyleProp<TextStyle>;
  icon: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, onPress, style, icon }) => {
  
  return (
    <View>
      <Pressable onPress={onPress} style={[style, { borderRadius: 16, padding: 16 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems: 'center' }}>
          {icon}
          <Text style={{ fontSize: 20, fontWeight: 'light', color: 'white' }}>{buttonText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

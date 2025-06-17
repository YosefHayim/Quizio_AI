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
  icon: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
  return (
    <View style={[getButtonStyleByType(props.buttonType), { borderRadius: 16, padding: 16, width: '100%' }]}>
      <Pressable onPress={props.onPress}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {props.icon}
          <Text style={{ fontSize: 20, fontWeight: 'light', color: 'white' }}>{props.buttonText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

import { colors } from 'constants/colors';
import { ReactNode } from 'react';
import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const getButtonStyleByType = (buttonType: string, extraStyle?: any) => {
  switch (buttonType) {
    case 'success':
      return { backgroundColor: colors.correctOrConfirm };

    case 'warning':
      return { backgroundColor: colors.wrongOrWarning };

    case 'confirmation':
      return { backgroundColor: colors.activeButtonBackground };

    case 'custom':
      return { ...extraStyle };

    default:
      return { backgroundColor: colors.optionButtonBackground, borderColor: colors.defaultborderButton, borderWidth: 1 };
  }
};

interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  buttonType: 'confirmation' | 'success' | 'warning' | 'default' | 'custom';
  isPending?: boolean;
  buttonTextColor?: string;
  extraStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
  return (
    <View style={[getButtonStyleByType(props.buttonType, props.extraStyle), { borderRadius: 16, padding: 16, width: '100%' }]}>
      {props.isPending ? (
        <ActivityIndicator color={colors.defaultborderButton} />
      ) : (
        <Pressable onPress={props.onPress} disabled={props.isPending}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
            {props.icon}
            <Text style={{ fontSize: 20, fontWeight: 'light', color: props.buttonTextColor ? props.buttonTextColor : 'white' }}>{props.buttonText}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default CustomButton;

import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';
import { ReactNode } from 'react';
import { colors } from 'constants/colors';

const getButtonStyleByType = (buttonType: string, extraStyle?: any) => {
  switch (buttonType) {
    case 'success':
      return { backgroundColor: colors.correctOrConfirm };

    case 'warning':
      return { backgroundColor: colors.wrongOrWarning };

    case 'confirmation':
      return { backgroundColor: colors.darkTheme };

    case 'custom':
      return { ...extraStyle };

    default:
      return {
        backgroundColor: colors.optionButtonBackground,
        borderColor: colors.defaultborderButton,
        borderWidth: 1,
      };
  }
};

interface CustomButtonProps {
  onPress: () => void;
  buttonType: 'confirmation' | 'success' | 'warning' | 'default' | 'custom';
  buttonText?: string;
  isPending?: boolean;
  buttonTextColor?: string;
  extraStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
  return (
    <View
      style={[
        getButtonStyleByType(props.buttonType, props.extraStyle),
        { borderRadius: 100, padding: 14, width: '100%' },
      ]}>
      {props.isPending ? (
        <ActivityIndicator color={colors.defaultborderButton} />
      ) : (
        <Pressable onPress={props.onPress} disabled={props.isPending}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
            }}>
            {props.icon}
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'light',
                color: props.buttonTextColor ? props.buttonTextColor : 'white',
              }}>
              {props.buttonText}
            </Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default CustomButton;

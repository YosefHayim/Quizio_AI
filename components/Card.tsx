import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';

import { ReactNode } from 'react';
import { colors } from 'constants/colors';

interface CardProps {
  children: ReactNode;
  extraStyle?: StyleProp<TextStyle>;
}

const Card: React.FC<CardProps> = ({ children, extraStyle }) => {
  return <View style={[styles.rootContainer, extraStyle]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    padding: 20,
    borderColor: colors.defaultborderButton,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: colors.cardBackground,
  },
});

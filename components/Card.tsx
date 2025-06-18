import { StyleSheet, View } from 'react-native';

import { ReactNode } from 'react';
import { colors } from 'constants/colors';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderColor: colors.defaultborderButton,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: colors.cardBackground,
  },
});

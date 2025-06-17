import { colors } from 'constants/colors';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderColor: colors.defaultborderButton,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: colors.cardBackground,
      }}>
      {children}
    </View>
  );
};

export default Card;

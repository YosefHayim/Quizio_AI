import { Text, TouchableOpacity } from 'react-native';

import { colors } from 'constants/colors';

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.9}
      style={{
        backgroundColor: colors.blue,
        borderRadius: 8,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: colors.paper, fontSize: 15, fontWeight: 600 }}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

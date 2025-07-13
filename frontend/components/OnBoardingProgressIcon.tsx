import { View } from 'react-native';
import { colors } from 'constants/colors';

interface OnBoardingProgressIconProps {
  size: number;
  bg: string;
}

const OnBoardingProgressIcon: React.FC<OnBoardingProgressIconProps> = (props) => {
  return (
    <View
      style={{
        height: props.size ? props.size : 35,
        justifyContent: 'center',
        alignItems: 'center',
        width: props.size ? props.size : 35,
        transform: 'rotate(45deg)',
        backgroundColor: props.bg ? props.bg : colors.blue,
      }}
    />
  );
};

export default OnBoardingProgressIcon;

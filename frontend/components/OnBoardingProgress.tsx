import OnBoardingProgressIcon from './OnBoardingProgressIcon';
import { View } from 'react-native';
import { colors } from 'constants/colors';
import { useEffect } from 'react';

interface OnBoardingProgressProps {
  currentStep: number;
}
const OnBoardingProgress: React.FC<OnBoardingProgressProps> = (props) => {
  useEffect(() => {}, [props.currentStep]);
  return (
    <View className="w-full flex-row items-center justify-center gap-5">
      {Array.from({ length: 5 }, (_, index) => (
        <OnBoardingProgressIcon
          key={`step-${index}`}
          bg={props.currentStep === index ? colors.blue : colors.black}
          size={props.currentStep === index ? 35 : 25}
        />
      ))}
    </View>
  );
};

export default OnBoardingProgress;

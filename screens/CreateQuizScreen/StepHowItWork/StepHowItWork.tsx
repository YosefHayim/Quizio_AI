import { SmallText } from 'components/Paragraph';
import { Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

interface StepHowItWorksProps {
  stepNumber: number;
  stepText: string;
  displayArrow: boolean;
}

const StepHowItWork: React.FC<StepHowItWorksProps> = ({ stepNumber, stepText, displayArrow }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <View style={{ borderRadius: 100, padding: 10, width: 40, backgroundColor: 'red' }}>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{stepNumber}</Text>
        </View>
        <SmallText text={stepText} style={{ fontWeight: 'bold' }} />
      </View>
      {displayArrow && <Feather name="arrow-right" size={24} color="black" style={{ marginBottom: '10%' }} />}
    </View>
  );
};

export default StepHowItWork;

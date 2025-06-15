import { CustomButton } from 'components/CustomButton';
import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const CreateNewQuizSection = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <AntDesign name="youtube" size={24} color="red" />
          <Title titleText="Create New Quiz" style={{ fontWeight: 'bold' }} />
        </View>
        <SmallText text="Turn any YouTube video into an interactive learning experience" />
        <CustomButton
          buttonText="Create New Quiz"
          style={{ backgroundColor: 'red', padding: 8, borderRadius: 6 }}
          onPress={() => console.log('placeholder click')}
          styleText={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
        />
      </View>
    </View>
  );
};

export default CreateNewQuizSection;

import { CustomButton } from 'components/CustomButton';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const CreateNewQuizSection = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <AntDesign name="youtube" size={24} color="red" />
          <Title titleText="Create New Quiz" />
        </View>
        <Paragraph text="Turn any YouTube video into an interactive learning experience" />
        <CustomButton
          icon={<AntDesign name="addfile" size={24} color="white" />}
          buttonText="Create New Quiz"
          buttonType="confirmation"
          onPress={() => navigation.navigate('dashboard')}
        />
      </View>
    </View>
  );
};

export default CreateNewQuizSection;

import CustomButton from 'components/CustomButton';
import CustomHeader from 'components/CustomHeader';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import Paragraph from 'components/Paragraph';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

const AgeScreen = () => {
  const [age, setAge] = useState('0');
  return (
    <CustomScreen>
      <CustomHeader headerName="Age" navigateBackTo={() => router.navigate('/settings/account')} />
      <View style={{ flex: 1, gap: 12 }}>
        <Paragraph text="Age" />
        <CustomInput handleInputFn={(v) => setAge(v)} state={age} isPassword={false} />
        <View>
          <CustomButton buttonType="confirmation" buttonText="Save" onPress={() => console.log('')} />
        </View>
      </View>
    </CustomScreen>
  );
};

export default AgeScreen;

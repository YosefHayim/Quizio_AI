import CustomButton from 'components/CustomButton';
import CustomHeader from 'components/CustomHeader';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import Paragraph from 'components/Paragraph';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

const NameScreen = () => {
  const [name, setName] = useState('Yosef hayim sabag');
  return (
    <CustomScreen>
      <CustomHeader headerName="Name" navigateBackTo={() => router.navigate('/settings/account')} />
      <View style={{ flex: 1, gap: 12 }}>
        <Paragraph text="Full Name" />
        <CustomInput handleInputFn={(v) => setName(v)} state={name} isPassword={false} />
        <View>
          <CustomButton buttonType="confirmation" buttonText="Save" onPress={() => console.log('')} />
        </View>
      </View>
    </CustomScreen>
  );
};

export default NameScreen;

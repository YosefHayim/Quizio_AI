import CustomButton from 'components/CustomButton';
import CustomHeader from 'components/CustomHeader';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import Paragraph from 'components/Paragraph';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

const EmailScreen = () => {
  const [email, setEmail] = useState('yosefisabag@gmail.com');
  return (
    <CustomScreen>
      <CustomHeader headerName="Email address" navigateBackTo={() => router.navigate('/settings/account')} />
      <View style={{ flex: 1, gap: 12 }}>
        <Paragraph text="Primary email" />
        <CustomInput handleInputFn={(v) => setEmail(v)} state={email} isPassword={false} />
        <View>
          <CustomButton buttonType="confirmation" buttonText="Save" onPress={() => console.log('')} />
        </View>
      </View>
    </CustomScreen>
  );
};

export default EmailScreen;

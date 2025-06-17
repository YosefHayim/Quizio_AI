import { CustomInput } from 'components/CustomInput';
import { CustomScreen } from 'components/CustomScreen';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { useState } from 'react';
import { View } from 'react-native';

const VerifyOTPScreen = () => {
  const [otpInput, setOtpInput] = useState({
    firstInput: '',
    secInput: '',
    thirdInput: '',
    fourInput: '',
    fiveInput: '',
    sixInput: '',
  });

  return (
    <CustomScreen>
      <View>
        <Title titleText="Verify Your Account" />
      </View>
      <View>
        <Paragraph text={'Enter the 6-digits code sent to your phone or email.'} extraStyle={{ textAlign: 'center' }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}></View>
      <View>
        <Paragraph text={`Didn׳t recieve a code? Resend`} extraStyle={{ textAlign: 'center', color: colors.notificationOrPargraph }} />
      </View>
    </CustomScreen>
  );
};

export default VerifyOTPScreen;

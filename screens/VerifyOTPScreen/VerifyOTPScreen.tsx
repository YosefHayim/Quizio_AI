import { CustomButton } from 'components/CustomButton';
import { CustomScreen } from 'components/CustomScreen';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { useUserInfo } from 'context/userInfoContext';
import { handleOtpVerification } from 'handlers/handleOtpVerification';
import useVerifyAuthOtp from 'hooks/useVerifyoAuthOtp';
import { useState } from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

const VerifyOTPScreen = () => {
  const { user } = useUserInfo();
  const [otpInput, setOtpInput] = useState('');
  const { mutate: verifyAuthOtpMutation, isPending } = useVerifyAuthOtp();

  return (
    <CustomScreen>
      <View>
        <Title titleText="Verify Your Account" />
      </View>
      <View>
        <Paragraph text={'Enter the 6-digits code sent to your phone or email.'} extraStyle={{ textAlign: 'center' }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={(text) => setOtpInput(text)}
          secureTextEntry={false}
          theme={{
            focusStickStyle: { backgroundColor: 'white' },
            pinCodeTextStyle: { color: colors.activeButtonBackground },
            focusedPinCodeContainerStyle: { borderColor: 'white' },
          }}
        />
      </View>
      <View>
        <Paragraph text={`Didn׳t recieve a code? Resend`} extraStyle={{ textAlign: 'center', color: colors.notificationOrPargraph }} />
      </View>
      <View>
        <CustomButton
          buttonText="Verify"
          buttonType="confirmation"
          onPress={() => handleOtpVerification(otpInput, user?.phone ?? '', verifyAuthOtpMutation)}
          isPending={isPending}
        />
      </View>
    </CustomScreen>
  );
};

export default VerifyOTPScreen;

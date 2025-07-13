import { useEffect, useState } from 'react';

import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import { OtpInput } from 'react-native-otp-entry';
import Paragraph from 'components/Paragraph';
import Title from 'components/CustomTitle';
import { View } from 'react-native';
import { colors } from 'constants/colors';
import { formatCountdown } from 'utils/formatCountdown';
import { handleOtpVerification } from 'handlers/handleOtpVerification';
import { useUserInfo } from 'context/userInfoContext';
import useVerifyAuthOtp from 'hooks/useVerifyoAuthOtp';

const VerifyOTPScreen = () => {
  const { user } = useUserInfo();
  const [otpInput, setOtpInput] = useState('');
  const { mutate: verifyAuthOtpMutation, isPending } = useVerifyAuthOtp();
  const [countdown, setCountdown] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (otpInput.length === 6 && !isPending) {
        handleOtpVerification(otpInput, user!.phone!, verifyAuthOtpMutation);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [otpInput]);

  return (
    <CustomScreen>
      <View>
        <Title titleText="Verify Your Account" />
      </View>
      <View>
        <Paragraph
          text={'Enter the 6-digits code sent to your phone or email.'}
          extraStyle={{ textAlign: 'center' }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={(text) => setOtpInput(text)}
          secureTextEntry={false}
          theme={{
            focusStickStyle: { backgroundColor: 'white' },
            pinCodeTextStyle: { color: 'white' },
            focusedPinCodeContainerStyle: { borderColor: 'white' },
          }}
        />
      </View>
      <View>
        <Paragraph text={formatCountdown(countdown)} extraStyle={{ fontWeight: 'bold' }} />
      </View>
      <View>
        <Paragraph
          text={`Didn׳t recieve a code? Resend`}
          extraStyle={{ textAlign: 'center', color: colors.notificationOrPargraph }}
        />
      </View>
      <View style={{ width: '100%' }}>
        <CustomButton
          buttonText="Verify"
          buttonType="confirmation"
          onPress={() => handleOtpVerification(otpInput, user!.phone!, verifyAuthOtpMutation)}
          isPending={isPending}
        />
      </View>
    </CustomScreen>
  );
};

export default VerifyOTPScreen;

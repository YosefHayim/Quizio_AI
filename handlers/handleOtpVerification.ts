import { Alert } from 'react-native';
import { OtpInfoRecieved } from 'api/verifyoAuthOtp';

export const handleOtpVerification = (token: string, phone: string, verifyAuthOtpMutation: (data: OtpInfoRecieved) => void) => {
  if (token.length < 6) {
    Alert.alert('Invalid input!', 'Please enter all six digits.', [{ text: 'Okay' }]);
    return;
  }
  console.log('recieved data for verifying:', phone, token);

  verifyAuthOtpMutation({
    phone,
    token,
    type: 'sms',
  });
};

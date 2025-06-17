import { Alert } from 'react-native';

const handleSignup = (emailOrPhone: string, signUpMutation: (emailOrPhone: string) => void) => {
  try {
    if (!emailOrPhone) Alert.alert('Invalid input', 'Please provide valid inputs', [{ text: 'Close' }]);

    if (emailOrPhone.includes('@')) {
      console.log('email recieved from input: ', emailOrPhone);
      signUpMutation(emailOrPhone);
    } else {
      console.log('phone recieved from input: ', emailOrPhone);
      signUpMutation(emailOrPhone);
    }
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignup;

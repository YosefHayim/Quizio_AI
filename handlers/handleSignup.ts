import { Alert } from 'react-native';

const handleSignup = (inputProvided: string, signUpMutation: ({}) => void) => {
  try {
    if (!inputProvided) Alert.alert('Invalid input', 'Please provide valid inputs', [{ text: 'Close' }]);

    if (inputProvided.includes('@')) {
      signUpMutation({ email: inputProvided });
    } else {
      signUpMutation({ phone: inputProvided });
    }
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignup;

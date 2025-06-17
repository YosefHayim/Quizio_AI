import { Alert } from 'react-native';

const handleSignin = (inputProvided: string, signInMutation: ({}) => void) => {
  try {
    if (!inputProvided) Alert.alert('Invalid input', 'Please provide valid inputs', [{ text: 'Close' }]);

    if (inputProvided.includes('@')) {
      signInMutation({ email: inputProvided });
    } else {
      signInMutation({ phone: inputProvided });
    }
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignin;

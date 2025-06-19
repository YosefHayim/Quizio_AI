import { FormProps } from 'app/auth/fill-signup-form';

const handleSignInOrRegisterWithoAuthOtp = (form: FormProps, signInOrRegisterWithoAuthOtpMutation: (form: FormProps) => void) => {
  console.log('phone input recieved: ', form);

  try {
    signInOrRegisterWithoAuthOtpMutation(form);
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignInOrRegisterWithoAuthOtp;

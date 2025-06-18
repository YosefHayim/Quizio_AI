const handleSignInOrRegisterWithoAuthOtp = (phone: string, signInOrRegisterWithoAuthOtpMutation: (phone: string) => void) => {
  try {
    signInOrRegisterWithoAuthOtpMutation(phone);
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignInOrRegisterWithoAuthOtp;

const handleSignInOrRegisterWithoAuthOtp = (phone: string, signInOrRegisterWithoAuthOtp: (phone: string) => void) => {
  try {
    signInOrRegisterWithoAuthOtp(phone);
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignInOrRegisterWithoAuthOtp;

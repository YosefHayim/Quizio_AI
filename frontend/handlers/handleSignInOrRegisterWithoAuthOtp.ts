const handleSignInOrRegisterWithoAuthOtp = (
  phone: string,
  signInOrRegisterWithoAuthOtpMutation: (phone: string) => void
) => {
  console.log('phone input recieved: ', phone);

  try {
    signInOrRegisterWithoAuthOtpMutation(phone);
  } catch (error) {
    console.error('Error durning sign in: ', error);
  }
};

export default handleSignInOrRegisterWithoAuthOtp;

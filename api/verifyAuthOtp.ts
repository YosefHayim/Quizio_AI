import { supabase } from './configuration';

export type OtpInfoRecieved = {
  phone: string;
  token: string;
  type: 'sms';
};

const verifyAuthOtp = async (otpInfoRecieved: OtpInfoRecieved) => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp(otpInfoRecieved);

    if (error) throw error;

    console.log(session);
    return session;
  } catch (error) {
    console.log('Error while verifying OTP code:', error);
  }
};

export default verifyAuthOtp;

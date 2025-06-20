import { supabase } from './configuration';

export type OtpInfoRecieved = {
  phone: string;
  token: string;
  type: 'sms';
};

const verifyoAuthOtp = async (otpInfoRecieved: OtpInfoRecieved) => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp(otpInfoRecieved);

    if (error) throw error;
    console.log(session);
    return session;
  } catch (error) {
    console.error('Error at verifyoAuthOtp function: ', error);
  }
};

export default verifyoAuthOtp;

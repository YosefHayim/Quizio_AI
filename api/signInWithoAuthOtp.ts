import { supabase } from './configuration';

export type OtpCode = {
  phone: string;
};

const signInWithoAuthOtp = async ({ phone }: OtpCode) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
    });

    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.log('Error while verifying OTP code:', error);
  }
};

export default signInWithoAuthOtp;

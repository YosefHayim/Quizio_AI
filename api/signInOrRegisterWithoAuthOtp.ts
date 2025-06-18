import { supabase } from './configuration';

const signInOrRegisterWithoAuthOtp = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
    });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error while sign in or sign up to get OTP code:', error);
  }
};

export default signInOrRegisterWithoAuthOtp;

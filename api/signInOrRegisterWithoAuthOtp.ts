import { supabase } from './configuration';

const signInOrRegisterWithoAuthOtp = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
    });

    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.log('Error while sign in or sign up to get OTP code:', error);
  }
};

export default signInOrRegisterWithoAuthOtp;

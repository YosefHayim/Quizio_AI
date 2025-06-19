import { FormProps } from 'app/auth/fill-signup-form';
import { supabase } from './configuration';

const signInOrRegisterWithoAuthOtp = async (form: FormProps) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      form,
    });

    if (error) throw error;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error while sign in or sign up to get OTP code:', error);
  }
};

export default signInOrRegisterWithoAuthOtp;

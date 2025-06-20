import { supabase } from './configuration';

const signInOrRegisterWithoAuthOtp = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
      options: {
        channel: 'sms',
      },
    });

    if (error) throw error;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error at signInOrRegisterWithoAuthOtp function: ', error);
  }
};

export default signInOrRegisterWithoAuthOtp;

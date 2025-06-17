import { supabase } from './configuration';

export type SignInInformation = {
  email?: string;
  phone?: string;
};

const signin = async (info: SignInInformation) => {
  try {
    let credentials;

    if (info.email) {
      credentials = { email: info.email, password: 'placeholder' };
    } else if (info.phone) {
      credentials = { phone: info.phone, password: 'placeholder' };
    } else {
      throw new Error('Either email or phone must be provided');
    }

    const { data, error } = await supabase.auth.signInWithPassword(credentials);
    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.error('signin failed:', error);
  }
};

export default signin;

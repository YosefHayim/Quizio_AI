import { supabase } from './configuration';

export type SignUpInformation = {
  email?: string;
  phone?: string;
};

const signUpWithPhoneOrEmail = async (info: SignUpInformation) => {
  try {
    let credentials;

    if (info.email) {
      credentials = { email: info.email, password: '' };
    } else if (info.phone) {
      credentials = { phone: info.phone, password: '' };
    } else {
      throw new Error('Either email or phone must be provided');
    }

    const { data, error } = await supabase.auth.signUp(credentials);
    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.error('Signup With Phone Or Email failed:', error);
  }
};

export default signUpWithPhoneOrEmail;

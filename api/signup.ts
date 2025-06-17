import { supabase } from './configuration';

export type SignupInformation = {
  email?: string;
  phone_number?: string;
};

const signup = async (info: SignupInformation) => {
  try {
    const { data, error } = await supabase.from('users').insert(info).select();

    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default signup;

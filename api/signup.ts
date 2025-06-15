import { supabase } from './configuration';

type SignupInformation = {
  full_name: string;
  password: string;
  email: string;
  is_active: boolean;
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

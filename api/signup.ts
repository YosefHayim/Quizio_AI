import supabase from './configuration';

type SignupInformation = {
  full_name: string;
  phone_number: string;
  email: string;
  is_active: boolean;
};

const signup = async (info: SignupInformation) => {
  const { data, error } = await supabase.from('users').insert(info).select();

  if (error) throw error;

  return data;
};

export default signup;

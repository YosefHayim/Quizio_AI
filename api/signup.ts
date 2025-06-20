import { supabase } from './configuration';

export interface SignupFormProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  age?: string;
}

const signup = async ({ email, password, firstName, lastName }: SignupFormProps) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { firstName, lastName } },
    });

    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.error('Error at signup function: ', error);
  }
};

export default signup;

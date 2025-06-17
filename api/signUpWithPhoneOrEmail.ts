import { supabase } from './configuration';

const signUpWithPhoneOrEmail = async (phoneOrEmail: string) => {
  if (!phoneOrEmail) throw new Error(`Phone or email is undefiend: ${phoneOrEmail}`);
  try {
    let credentials;
    if (phoneOrEmail.includes('@')) {
      credentials = { email: phoneOrEmail, password: 'placeholder' };
    } else {
      credentials = { phone: phoneOrEmail, password: 'placeholder' };
    }

    const { data, error } = await supabase.auth.signUp(credentials);

    if (error) throw error;

    console.log('data recieved from request: ', data);
    return data;
  } catch (error) {
    console.error('Signup With Phone Or Email failed:', error);
  }
};

export default signUpWithPhoneOrEmail;

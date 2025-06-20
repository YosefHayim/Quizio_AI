import { SignupFormProps } from 'api/signup';

export const handleRegularSignup = (
  data: SignupFormProps,
  signupMutation: (data: SignupFormProps) => void
) => {
  if (!data) return console.error('No data recieved: ', data);
  else signupMutation(data);
  console.log('data recieved: ', data);
};

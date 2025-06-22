import { SignInProps } from 'api/signin';

const handleRegularSignIn = (data: SignInProps, mutate: (data: SignInProps) => void) => {
  if (!data) return console.log('No data provided to sign in: ', data);
  else mutate(data);
  console.log('data recieved: ', data);
};

export default handleRegularSignIn;

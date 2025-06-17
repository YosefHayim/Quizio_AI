// hooks/useSignIn.ts
import { useMutation } from '@tanstack/react-query';
import signin, { SignInInformation } from 'api/signup';

const useSignIn = () => {
  return useMutation({
    mutationFn: (userInfo: SignInInformation) => signin(userInfo),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useSignIn;

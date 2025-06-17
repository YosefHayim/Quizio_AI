// hooks/useSignup.ts
import { useMutation } from '@tanstack/react-query';
import signup, { SignupInformation } from 'api/signup';

const useSignup = () => {
  return useMutation({
    mutationFn: (userInfo: SignupInformation) => signup(userInfo),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useSignup;

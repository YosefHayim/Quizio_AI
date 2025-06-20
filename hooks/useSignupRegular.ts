import signup, { SignupFormProps } from 'api/signup';

import { router } from 'expo-router';
import { useMutation } from '@tanstack/react-query';

const useSignupRegular = () => {
  return useMutation({
    mutationFn: (form: SignupFormProps) => signup(form),
    onSuccess: () => {
      router.push('/dashboard');
    },
    onError: (error) => console.error('useSignupRegular function error:', error),
  });
};

export default useSignupRegular;

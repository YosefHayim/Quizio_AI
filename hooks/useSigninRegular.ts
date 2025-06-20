import signin, { SignInProps } from 'api/signin';

import { router } from 'expo-router';
import { useMutation } from '@tanstack/react-query';

const useSigninRegular = () => {
  return useMutation({
    mutationFn: (data: SignInProps) => signin(data),
    onSuccess: () => router.replace('/dashboard'),
    onError: (error) => console.error('useSigninRegular function error:', error),
  });
};

export default useSigninRegular;

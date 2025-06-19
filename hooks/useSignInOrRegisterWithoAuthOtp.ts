import { FormProps } from 'app/auth/fill-signup-form';
import { Router } from 'expo-router';
import signInOrRegisterWithoAuthOtp from 'api/signInOrRegisterWithoAuthOtp';
import { useMutation } from '@tanstack/react-query';

const useSignInOrRegisterWithoAuthOtp = (router: Router) => {
  return useMutation({
    mutationFn: (form: FormProps) => signInOrRegisterWithoAuthOtp(form),
    onSuccess: (data) => {
      router.push('/auth/verify-otp');
    },
    onError: (error) => console.error('useSignInOrRegisterWithoAuthOtp error:', error),
  });
};

export default useSignInOrRegisterWithoAuthOtp;

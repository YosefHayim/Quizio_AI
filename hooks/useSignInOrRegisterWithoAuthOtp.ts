import { Router } from 'expo-router';
import signInOrRegisterWithoAuthOtp from 'api/signInOrRegisterWithoAuthOtp';
import { useMutation } from '@tanstack/react-query';

const useSignInOrRegisterWithoAuthOtp = (router: Router) => {
  return useMutation({
    mutationFn: (phone: string) => signInOrRegisterWithoAuthOtp(phone),
    onSuccess: (data) => {
      router.replace('/auth/verify-otp');
    },
    onError: (error) => console.error('useSignInOrRegisterWithoAuthOtp error:', error),
  });
};

export default useSignInOrRegisterWithoAuthOtp;

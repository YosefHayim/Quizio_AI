import { Router } from 'expo-router';
import signInOrRegisterWithoAuthOtp from 'api/signInOrRegisterWithoAuthOtp';
import { useMutation } from '@tanstack/react-query';

const useSignInOrRegisterWithoAuthOtp = (router: Router) => {
  return useMutation({
    mutationFn: (phone: string) => signInOrRegisterWithoAuthOtp(phone),
    onSuccess: () => router.replace('/auth/verify-otp'),
    onError: (error) => console.error('useSignUp:', error),
  });
};

export default useSignInOrRegisterWithoAuthOtp;

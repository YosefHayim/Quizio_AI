import { router } from 'expo-router';
import signInOrRegisterWithoAuthOtp from 'api/signInOrRegisterWithoAuthOtp';
import { useMutation } from '@tanstack/react-query';

const useSignInOrRegisterWithoAuthOtp = () => {
  return useMutation({
    mutationFn: (phone: string) => signInOrRegisterWithoAuthOtp(phone),
    onSuccess: () => {
      router.push('/auth/verify-otp');
    },
    onError: (error) => console.error('useSignInOrRegisterWithoAuthOtp function error:', error),
  });
};

export default useSignInOrRegisterWithoAuthOtp;

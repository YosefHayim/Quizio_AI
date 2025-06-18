import { useMutation } from '@tanstack/react-query';
import signInOrRegisterWithoAuthOtp from 'api/signInOrRegisterWithoAuthOtp';

const useSignInOrRegisterWithoAuthOtp = () => {
  return useMutation({
    mutationFn: (phone: string) => signInOrRegisterWithoAuthOtp(phone),
    onError: (error) => console.error('useSignUp:', error),
  });
};

export default useSignInOrRegisterWithoAuthOtp;

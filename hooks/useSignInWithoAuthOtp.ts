import { useMutation } from '@tanstack/react-query';
import signInWithoAuthOtp, { OtpCode } from 'api/signInWithoAuthOtp';

const useSignInWithoAuthOtp = () => {
  return useMutation({
    mutationFn: (phone: OtpCode) => signInWithoAuthOtp(phone),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useSignInWithoAuthOtp;

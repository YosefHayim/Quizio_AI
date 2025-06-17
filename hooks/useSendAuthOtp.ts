import { useMutation } from '@tanstack/react-query';
import sendAuthOtp, { OtpCode } from 'api/sendAuthOtp';

const useSendAuthOtp = () => {
  return useMutation({
    mutationFn: (phone: OtpCode) => sendAuthOtp(phone),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useSendAuthOtp;

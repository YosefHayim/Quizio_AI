import { useMutation } from '@tanstack/react-query';
import verifyAuthOtp, { OtpInfoRecieved } from 'api/verifyoAuthOtp';

const useVerifyoAuthOtp = () => {
  return useMutation({
    mutationFn: (OtpInfoRecieved: OtpInfoRecieved) => verifyAuthOtp(OtpInfoRecieved),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useVerifyoAuthOtp;

import verifyAuthOtp, { OtpInfoRecieved } from 'api/verifyoAuthOtp';

import { Router } from 'expo-router';
import { useMutation } from '@tanstack/react-query';

const useVerifyoAuthOtp = (router: Router) => {
  return useMutation({
    mutationFn: (OtpInfoRecieved: OtpInfoRecieved) => verifyAuthOtp(OtpInfoRecieved),
    onSuccess: () => router.replace('/dashboard'),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useVerifyoAuthOtp;

import verifyAuthOtp, { OtpInfoRecieved } from 'api/verifyoAuthOtp';

import { Router } from 'expo-router';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

const useVerifyoAuthOtp = (router: Router) => {
  const { setItem } = useAsyncStorage('accessToken');

  return useMutation({
    mutationFn: (OtpInfoRecieved: OtpInfoRecieved) => verifyAuthOtp(OtpInfoRecieved),
    onSuccess: (session) => {
      console.log(session);
      if (session?.access_token) setItem(session.access_token);
      router.replace('/dashboard');
    },
    onError: (error) => console.error('useVerifyoAuthOtp error:', error),
  });
};

export default useVerifyoAuthOtp;

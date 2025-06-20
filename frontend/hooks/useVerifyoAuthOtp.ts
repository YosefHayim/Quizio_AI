import verifyAuthOtp, { OtpInfoRecieved } from 'api/verifyoAuthOtp';

import { router } from 'expo-router';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

const useVerifyoAuthOtp = () => {
  const { setItem } = useAsyncStorage('accessToken');

  return useMutation({
    mutationFn: (OtpInfoRecieved: OtpInfoRecieved) => verifyAuthOtp(OtpInfoRecieved),
    onSuccess: (session) => {
      if (session?.access_token) setItem(session.access_token);
      router.push('/dashboard');
    },
    onError: (error) => console.error('useVerifyoAuthOtp function error:', error),
  });
};

export default useVerifyoAuthOtp;

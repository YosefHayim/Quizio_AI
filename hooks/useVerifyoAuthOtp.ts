import { NavigationProp } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import verifyAuthOtp, { OtpInfoRecieved } from 'api/verifyoAuthOtp';

const useVerifyoAuthOtp = (navigation: NavigationProp<any>) => {
  return useMutation({
    mutationFn: (OtpInfoRecieved: OtpInfoRecieved) => verifyAuthOtp(OtpInfoRecieved),
    onSuccess: () => navigation.navigate('dashboard'),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useVerifyoAuthOtp;

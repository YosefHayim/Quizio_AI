import { NavigationProp } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import signInOrRegisterWithoAuthOtp from 'api/signInOrRegisterWithoAuthOtp';

const useSignInOrRegisterWithoAuthOtp = (navigation: NavigationProp<any>) => {
  return useMutation({
    mutationFn: (phone: string) => signInOrRegisterWithoAuthOtp(phone),
    onSuccess: () => navigation.navigate('verify-otp-screen'),
    onError: (error) => console.error('useSignUp:', error),
  });
};

export default useSignInOrRegisterWithoAuthOtp;

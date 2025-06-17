// hooks/useSignUpWithPhoneOrEmail.ts
import { useMutation } from '@tanstack/react-query';
import signUpWithPhoneOrEmail from 'api/signUpWithPhoneOrEmail';

const useSignUpWithPhoneOrEmail = () => {
  return useMutation({
    mutationFn: (phoneOrEmail: string) => signUpWithPhoneOrEmail(phoneOrEmail),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useSignUpWithPhoneOrEmail;

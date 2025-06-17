// hooks/useSignUpWithPhoneOrEmail.ts
import { useMutation } from '@tanstack/react-query';
import signUpWithPhoneOrEmail, { SignUpInformation } from 'api/signUpWithPhoneOrEmail';

const useSignUpWithPhoneOrEmail = () => {
  return useMutation({
    mutationFn: (userInfo: SignUpInformation) => signUpWithPhoneOrEmail(userInfo),
    onError: (error) => console.error('Signup error:', error),
  });
};

export default useSignUpWithPhoneOrEmail;

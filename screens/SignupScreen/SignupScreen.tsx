import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen/CustomScreen';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import useSignup from 'hooks/useSignup';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import AntDesign from '@expo/vector-icons/AntDesign';
import handleSignup from 'handlers/handleSignup';

const SignupScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const { mutate: signUpMutation, isPending } = useSignup();

  return (
    <CustomScreen>
      <View style={{ marginVertical: 10 }}>
        <Title titleText="Sign Up" />
      </View>
      <CustomInput
        isPassword={false}
        showPasswordIcon={false}
        handleInputFn={(v) => setEmailOrPhone(v)}
        state={emailOrPhone}
        placeholderText="Email or phone"
      />
      <CustomButton buttonText="Login" buttonType="confirmation" onPress={() => handleSignup(emailOrPhone, signUpMutation)} isPending={isPending} />
      <Paragraph text={'Forget Password?'} colorText="gray" />
      <CustomButton
        isPending={isPending}
        buttonText={'Continue with Google'}
        buttonType="custom"
        buttonTextColor={colors.darkButton}
        onPress={() => console.log('v')}
        extraStyle={{ backgroundColor: 'white', width: '100%' }}
        icon={
          <Svg width={30} height={30} viewBox="0 0 48 48">
            <Path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <Path
              fill="#FF3D00"
              d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <Path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <Path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </Svg>
        }
      />
      <CustomButton
        buttonText={'Continue with Apple'}
        buttonType="custom"
        isPending={isPending}
        onPress={() => console.log('v')}
        extraStyle={{ backgroundColor: '#1F2125' }}
        icon={<AntDesign name="apple1" size={24} color="white" />}
      />
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Paragraph text={`Don׳t have an account?`} />
        <Pressable onPress={() => console.log('navigation to signup')}>
          <Paragraph text={`Sign up`} colorText={colors.activeButtonBackground} />
        </Pressable>
      </View>
    </CustomScreen>
  );
};

export default SignupScreen;

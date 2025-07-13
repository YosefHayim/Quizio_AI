import { Pressable, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import Paragraph from 'components/Paragraph';
import { SignupFormProps } from 'api/signup';
import Title from 'components/CustomTitle';
import { handleRegularSignup } from 'handlers/handleRegularSignUp';
import { router } from 'expo-router';
import useSignupRegular from 'hooks/useSignupRegular';
import { useState } from 'react';

const FillSignUpForm = () => {
  const { mutate, isPending } = useSignupRegular();

  const [form, setForm] = useState<SignupFormProps>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  });

  return (
    <CustomScreen>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', gap: 12 }}>
        <Title titleText="Sign up" />
        <CustomInput
          isPassword={false}
          showPasswordIcon={false}
          handleInputFn={(v) => setForm({ ...form, email: v })}
          state={`${form?.email}`}
          placeholderText="Email"
        />
        <CustomInput
          isPassword={true}
          showPasswordIcon={true}
          handleInputFn={(v) => setForm({ ...form, password: v })}
          state={`${form?.password}`}
          placeholderText="Password"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
          <View style={{ flex: 1 }}>
            <CustomInput
              isPassword={false}
              showPasswordIcon={false}
              handleInputFn={(v) => setForm({ ...form, firstName: v })}
              state={`${form?.firstName}`}
              placeholderText="First name"
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomInput
              isPassword={false}
              showPasswordIcon={false}
              handleInputFn={(v) => setForm({ ...form, lastName: v })}
              state={`${form?.lastName}`}
              placeholderText="Last name"
            />
          </View>
        </View>
        <CustomButton
          buttonText="Submit"
          buttonType="confirmation"
          onPress={() => handleRegularSignup(form, mutate)}
          isPending={isPending}
          extraStyle={{ flex: 1 }}
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center' }}>
        <Paragraph text={'Exisiting User?'} />
        <Pressable onPress={() => router.push('/auth/sign-in')}>
          <Paragraph
            text={'Log in'}
            extraStyle={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
          />
        </Pressable>
      </View>
      <View>
        <View style={{ justifyContent: 'center' }}>
          <View style={{ gap: 4 }}>
            <Paragraph text={`By tapping 'Sign up', I agree to Quizio׳s`} colorText="gray" />
            <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center' }}>
              <Paragraph text={`Terms`} colorText="black" />
              <Paragraph text={`and`} colorText="gray" />
              <Paragraph text={`Privacy Policy`} colorText="black" />
            </View>
          </View>
        </View>
      </View>
    </CustomScreen>
  );
};

export default FillSignUpForm;

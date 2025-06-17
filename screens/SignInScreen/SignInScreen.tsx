import { Title } from 'components/Title';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { Paragraph, SmallText } from 'components/Paragraph';
import { colors } from 'constants/colors';
import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { useState } from 'react';
import signup from 'api/signup';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !fullName) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      const newUser = {
        email,
        full_name: fullName,
        phone_number: '0546187549',
      };

      const data = await signup(newUser);
      console.log(data);
      // Optionally reset inputs or navigate
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: colors.darkTheme, padding: 20 }}>
          <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <View style={{ marginVertical: 10 }}>
              <Title titleText="Login" />
            </View>
            <CustomInput isPassword={false} showPasswordIcon={false} handleInputFn={(v) => setEmail(v)} state={email} placeholderText="Email or phone" />
            <CustomInput state={password} showPasswordIcon={true} isPassword={true} handleInputFn={(v) => setPassword(v)} placeholderText="Password" />
            <CustomButton buttonText={'Forget Password?'} buttonType="default" />
            <CustomButton buttonText="Login" buttonType="confirmation" onPress={() => console.log('')} icon={<></>} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

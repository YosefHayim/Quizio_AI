import { Title } from 'components/Title';
import { ScrollView, View } from 'react-native';
import { SmallText } from 'components/Paragraph';
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
  return <ScrollView keyboardDismissMode="on-drag" style={{ flex: 1, backgroundColor: colors.darkTheme, padding: 20 }}></ScrollView>;
};

export default SignInScreen;

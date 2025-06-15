import { Title } from 'components/Title';
import { ScrollView, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SmallText } from 'components/SmallText';
import { colors } from 'constants/colors';
import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { useState } from 'react';
import signup from 'api/signup';

const WelcomeScreen = () => {
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
        password,
        full_name: fullName,
        is_active: true,
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
    <ScrollView keyboardDismissMode="on-drag" style={{ flex: 1, backgroundColor: colors.backgroundColorLighRed }}>
      <View style={{ flex: 1, gap: 16, padding: 16, marginBottom: '20%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
          <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 6 }}>
            <FontAwesome5 name="brain" size={24} color="white" />
          </View>
          <Title titleText="Quiz AI" style={{ fontSize: 20, fontWeight: 'bold' }} />
        </View>
        <SmallText text={'Transform any Youtube video into an interactive quiz'} />
      </View>

      <View style={{ flex: 1, gap: 6 }}>
        <Title titleText="Welcome" style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }} />
        <SmallText text={'Sign in to your account or create a new one'} style={{ textAlign: 'center' }} />
        <CustomInput placeholderText="enter email" handleInputFn={(v) => setEmail(v)} state={email} />
        <CustomInput placeholderText="enter password" handleInputFn={(v) => setPassword(v)} state={password} />
        <CustomInput placeholderText="enter full name" handleInputFn={(v) => setFullName(v)} state={fullName} />
        <CustomButton buttonText="login" styleText={{ backgroundColor: 'red' }} onPress={handleSignUp} icon={<></>} />
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;

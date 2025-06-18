import { ImageBackground, StyleSheet, View } from 'react-native';

import { CustomButton } from 'components/CustomButton';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreenStepThree = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/step-3.png')} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Title titleText="Track Your Progress. Level Up." extraStyle={{ textAlign: 'center' }} />
          <Paragraph text="Earn badges, measure" extraStyle={{ textAlign: 'center' }} />
          <Paragraph text="improvement and keep learning" extraStyle={{ textAlign: 'center' }} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton buttonText="Get Started" buttonType="confirmation" onPress={() => navigation.navigate('sign-in')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: '#070916',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    gap: 12,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default WelcomeScreenStepThree;

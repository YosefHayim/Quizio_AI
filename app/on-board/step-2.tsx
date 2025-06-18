import { ImageBackground, StyleSheet, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';
import { router } from 'expo-router';

const WelcomeScreenStepTwo = () => {
  return (
    <ImageBackground source={require('../../assets/step-2.png')} style={styles.background} resizeMode="contain">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Title titleText="Instantly Create Quizzes From Youtube Videos" extraStyle={{ textAlign: 'center', fontSize: 20 }} />
          <Paragraph text="Paste a link or choose a trending video AI will handle the rest." extraStyle={{ textAlign: 'center' }} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton buttonText="Next" buttonType="confirmation" onPress={() => router.replace('/on-board/step-3')} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreenStepTwo;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000614',
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

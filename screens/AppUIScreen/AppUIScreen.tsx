import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { ScrollView, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card } from 'components/Card';

const AppUIScreen = () => {
  return (
    <ScrollView style={{ padding: 26, backgroundColor: colors.darkTheme }}>
      <View style={{ flex: 1, gap: 20 }}>
        <View style={{ gap: 10 }}>
          <Title titleText="Small texts" />
          <Paragraph text="paragraph text" />
        </View>
        <View style={{ gap: 20 }}>
          <Title titleText="Button types" />
          <CustomButton buttonText="button" onPress={() => console.log('')} buttonType="success" />
          <CustomButton buttonText="button" onPress={() => console.log('')} buttonType="warning" />
          <CustomButton buttonText="button" onPress={() => console.log('')} buttonType="default" />
          <CustomButton buttonType="confirmation" buttonText="button" onPress={() => console.log('')} />
        </View>
        <View style={{ gap: 10, flex: 1 }}>
          <Title titleText="Progress bar" />
          <ProgressBar progress={0.5} color={colors.progressBar} />
        </View>
        <View style={{ gap: 10, flex: 1 }}>
          <Title titleText="Card Componenet" />
          <Card>
            <Paragraph text={'Card Example'} />
          </Card>
        </View>
        <View style={{ gap: 10 }}>
          <Title titleText="inputs" />
          <CustomInput state="" showPasswordIcon={true} isPassword={true} handleInputFn={() => console.log('')} placeholderText="Password" />
          <CustomInput state="" showPasswordIcon={false} isPassword={false} handleInputFn={() => console.log('')} placeholderText="Email" />
        </View>
      </View>
      <View style={{ gap: 10, flex: 1 }}>
        <Title titleText="Icons for tabs and more" />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <SimpleLineIcons name="home" size={30} color="white" />
          <SimpleLineIcons name="clock" size={30} color="white" />
          <AntDesign name="plus" size={30} color="white" />
          <SimpleLineIcons name="trophy" size={30} color="white" />
          <SimpleLineIcons name="settings" size={30} color="white" />
          <SimpleLineIcons name="check" size={24} color={colors.correctOrConfirm} />
          <SimpleLineIcons name="check" size={24} color={colors.wrongOrWarning} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AppUIScreen;

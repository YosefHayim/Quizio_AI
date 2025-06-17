import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { Paragraph } from 'components/Paragraph';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { ScrollView, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

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
          <CustomButton buttonText="Active button" icon={<></>} onPress={() => console.log('')} style={{ backgroundColor: colors.activeButtonBackground }} />
          <CustomButton
            buttonText="Cancel or regular button"
            icon={<></>}
            onPress={() => console.log('')}
            style={{ backgroundColor: colors.optionButtonBackground, borderColor: colors.defaultborderButton, borderWidth: 1 }}
          />
          <CustomButton buttonText="warning or cancel button" icon={<></>} onPress={() => console.log('')} style={{ backgroundColor: colors.wrongOrWarning }} />
          <CustomButton
            buttonText="correct or confirm button"
            icon={<></>}
            onPress={() => console.log('')}
            style={{ backgroundColor: colors.correctOrConfirm }}
          />
        </View>
        <View style={{ gap: 10, flex: 1 }}>
          <Title titleText="Progress bar" />
          <ProgressBar progress={0.5} color={colors.progressBar} />
        </View>
        <View style={{ gap: 10, flex: 1 }}>
          <Title titleText="Card Componenet" />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              borderColor: colors.defaultborderButton,
              borderWidth: 1,
              borderRadius: 16,
              backgroundColor: colors.cardBackground,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Card example</Text>
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <Title titleText="inputs" />
          <CustomInput
            state=""
            showPasswordIcon={true}
            isPassword={true}
            handleInputFn={() => console.log('')}
            placeholderText="Password"
            placeholderTextColor={colors.placehoolderInputText}
            containerStyle={{
              borderRadius: 16,
              borderWidth: 1,
              backgroundColor: colors.cardBackground,
              borderColor: colors.defaultborderButton,
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 16,
              flexDirection: 'row',
            }}
            textInputStyle={{ borderRadius: 16, color: 'white', fontSize: 12 }}
          />
          <CustomInput
            state=""
            showPasswordIcon={false}
            isPassword={false}
            handleInputFn={() => console.log('')}
            placeholderText="Email"
            placeholderTextColor={colors.placehoolderInputText}
            containerStyle={{
              borderRadius: 16,
              borderWidth: 1,
              backgroundColor: colors.cardBackground,
              borderColor: colors.defaultborderButton,
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 16,
              flexDirection: 'row',
            }}
            textInputStyle={{ borderRadius: 16, color: 'white', fontSize: 12 }}
          />
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

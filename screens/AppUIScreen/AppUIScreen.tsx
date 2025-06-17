import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { ScrollView, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const AppUIScreen = () => {
  return (
    <ScrollView style={{ padding: 26, backgroundColor: colors.darkTheme }}>
      <View style={{ flex: 1, gap: 18 }}>
        <Title titleText="Header" style={{ fontWeight: 'bold', color: 'white', fontSize: 34 }} />
        <SmallText text={'Forget Password'} style={{ fontWeight: 'light', color: 'white', fontSize: 17 }} />
        <CustomButton
          buttonText="Active button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.activeButtonBackground, borderRadius: 16, padding: 16 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <CustomButton
          buttonText="Cancel or regular button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.optionButtonBackground, borderRadius: 16, padding: 16, borderColor: colors.defaultborderButton, borderWidth: 1 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <CustomButton
          buttonText="warning or cancel button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.wrongOrWarning, borderRadius: 16, padding: 16 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <CustomButton
          buttonText="correct or confirm button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.correctOrConfirm, borderRadius: 16, padding: 16 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <ProgressBar progress={0.5} color={colors.progressBar} />
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
        <CustomInput
          showPasswordIcon={true}
          isPassword={true}
          handleInputFn={() => console.log('')}
          placeholderText="password input"
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
    </ScrollView>
  );
};

export default AppUIScreen;

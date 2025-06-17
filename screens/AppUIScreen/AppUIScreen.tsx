import { CustomButton } from 'components/CustomButton';
import { colors } from 'constants/colors';
import { ScrollView, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const AppUIScreen = () => {
  return (
    <ScrollView style={{ padding: 26, backgroundColor: colors.darkTheme }}>
      <View style={{ flex: 1, gap: 18 }}>
        <CustomButton
          buttonText="Active button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.activeButtonBackground, borderRadius: 14, padding: 16 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <CustomButton
          buttonText="Cancel or regular button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.optionButtonBackground, borderRadius: 14, padding: 16, borderColor: colors.defaultborderButton, borderWidth: 2 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <CustomButton
          buttonText="warning or cancel button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.wrongOrWarning, borderRadius: 14, padding: 16 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <CustomButton
          buttonText="correct or confirm button"
          icon={<></>}
          onPress={() => console.log('')}
          style={{ backgroundColor: colors.correctOrConfirm, borderRadius: 14, padding: 16 }}
          styleText={{ fontSize: 20, fontWeight: 'light', color: 'white' }}
        />
        <ProgressBar progress={0.5} color={colors.progressBar} />
      </View>
    </ScrollView>
  );
};

export default AppUIScreen;

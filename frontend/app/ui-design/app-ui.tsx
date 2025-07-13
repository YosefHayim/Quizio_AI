import { ScrollView, View } from 'react-native';

import CustomButton from 'components/Button';
import { colors } from 'constants/colors';

const AppUIScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          padding: 26,
          backgroundColor: colors.lightTheme,
          gap: 10,
        }}>
        <CustomButton buttonText="Get Started" onPress={() => console.log('')} />
        <CustomButton buttonText="Already Have An Account" onPress={() => console.log('')} />
      </View>
    </ScrollView>
  );
};

export default AppUIScreen;

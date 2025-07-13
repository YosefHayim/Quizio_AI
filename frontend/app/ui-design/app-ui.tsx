import { ScrollView, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import CustomText from 'components/CustomText';
import OnBoardingProgressIcon from 'components/OnBoardingProgressIcon';
import { Picker } from '@react-native-picker/picker';
import { colors } from 'constants/colors';
import { useState } from 'react';

const AppUIScreen = () => {
  const [selectedUserRole, setSelectedUserRole] = useState('Student');

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          padding: 26,
          backgroundColor: colors.lightTheme,
          gap: 10,
        }}>
        <CustomButton buttonText="Active button" onPress={() => console.log('')} />
        <CustomInput
          showPasswordIcon={false}
          handleInputFn={(v) => console.log(v)}
          isPassword={false}
          placeholderText="Username"
        />
        <CustomInput
          showPasswordIcon={false}
          handleInputFn={(v) => console.log(v)}
          isPassword={false}
          placeholderText="Password"
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomText text="I׳m" />
          <Picker
            style={{ flex: 1 }}
            selectedValue={selectedUserRole}
            onValueChange={(itemValue) => setSelectedUserRole(itemValue)}>
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Teacher" value="teacher" />
          </Picker>
        </View>
      </View>
      <View
        style={{
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <OnBoardingProgressIcon bg={colors.blue} size={25} />
        <OnBoardingProgressIcon bg={colors.black} size={15} />
        <OnBoardingProgressIcon bg={colors.black} size={15} />
        <OnBoardingProgressIcon bg={colors.black} size={15} />
      </View>
    </ScrollView>
  );
};

export default AppUIScreen;

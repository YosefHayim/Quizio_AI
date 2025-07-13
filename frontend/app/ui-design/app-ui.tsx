import { Picker, PickerIOS } from '@react-native-picker/picker';
import { ScrollView, Text, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import CustomText from 'components/CustomText';
import { colors } from 'constants/colors';
import { useState } from 'react';

const AppUIScreen = () => {
  const [selectedUserRole, setSelectedUserRole] = useState('Student');

  return (
    <ScrollView>
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
          placeholderText="Placeholder"
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
        <View style={{ height: 1, backgroundColor: 'black' }} />
      </View>
    </ScrollView>
  );
};

export default AppUIScreen;

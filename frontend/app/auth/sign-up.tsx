import React, { useState } from 'react';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { View } from 'react-native';

const SignUpScreen = () => {
  const [selectedUserRole, setSelectedUserRole] = useState('student');

  return (
    <CustomScreen>
      <CustomTitle titleText="Learning made easy." />
      <CustomInput placeholderText="Username" />
      <CustomInput placeholderText="Email" />
      <CustomInput placeholderText="Password" />
      <CustomInput placeholderText="Confirm Password" />
      <View className="w-min flex-1 flex-row">
        <CustomText text="I׳m" extraStyle="text-xl font-bold" />
      </View>
      <CustomButton buttonText="Sign Up" onPress={() => console.log('v')} />
    </CustomScreen>
  );
};

export default SignUpScreen;

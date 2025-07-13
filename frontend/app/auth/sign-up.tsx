import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import { colors } from 'constants/colors';

const roles = ['Student', 'Teacher', 'Both'];

const SignUpScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleSelect = (index: IndexPath | IndexPath[]) => {
    if (index instanceof IndexPath) {
      setSelectedIndex(index);
      setSelectedRole(roles[index.row]);
    }
  };

  return (
    <CustomScreen>
      <CustomTitle titleText="Learning made easy." />
      <CustomInput placeholderText="Username" />
      <CustomInput placeholderText="Email" />
      <CustomInput placeholderText="Password" />
      <CustomInput placeholderText="Confirm Password" />
      <View className="flex-row items-center">
        <CustomText text="I׳m a" extraStyle="text-xl font-bold" />
        <Layout style={{ width: '80%', marginLeft: 20 }}>
          <Select
            selectedIndex={selectedIndex}
            onSelect={handleSelect}
            value={selectedRole}
            style={{ backgroundColor: colors.gray }}>
            {roles.map((role) => (
              <SelectItem title={role} key={role} />
            ))}
          </Select>
        </Layout>
      </View>
      <CustomButton buttonText="Sign Up" onPress={() => console.log('v')} />
    </CustomScreen>
  );
};

export default SignUpScreen;

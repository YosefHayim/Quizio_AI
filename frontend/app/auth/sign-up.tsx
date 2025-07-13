import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';

const SignUpScreen = () => {
  const [selectedUserRole, setSelectedUserRole] = useState('student');
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );

  return (
    <CustomScreen>
      <CustomTitle titleText="Learning made easy." />
      <CustomInput placeholderText="Username" />
      <CustomInput placeholderText="Email" />
      <CustomInput placeholderText="Password" />
      <CustomInput placeholderText="Confirm Password" />
      <View className="w-min flex-1 flex-row">
        <CustomText text="I׳m" extraStyle="text-xl font-bold" />
        <Layout style={styles.container} level="1">
          <Select selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </Layout>
      </View>
      <CustomButton buttonText="Sign Up" onPress={() => console.log('v')} />
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});

export default SignUpScreen;

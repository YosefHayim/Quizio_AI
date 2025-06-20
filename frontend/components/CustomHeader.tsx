import { Pressable, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import Title from './Title';

const CustomHeader: React.FC<{ headerName: string; navigateBackTo: () => void }> = ({ headerName, navigateBackTo }) => {
  return (
    <View style={{ width: '100%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Pressable style={{ position: 'absolute', left: 0 }} onPress={() => navigateBackTo()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Title titleText={headerName} />
      </View>
      <View style={{ height: 0.5, backgroundColor: 'gray', opacity: 0.5 }} />
    </View>
  );
};

export default CustomHeader;

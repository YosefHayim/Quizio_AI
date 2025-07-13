import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';

import { colors } from 'constants/colors';

interface CustomScreenProps {
  children: ReactNode;
}

const CustomScreen: React.FC<CustomScreenProps> = ({ children }) => {
  return (
    <ScrollView
      style={{ width: '100%' }}
      contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, backgroundColor: colors.lightTheme, padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CustomScreen;

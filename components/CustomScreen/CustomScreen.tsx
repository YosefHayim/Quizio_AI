import { colors } from 'constants/colors';
import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View } from 'react-native';

interface CustomScreenProps {
  children: ReactNode;
}

const CustomScreen: React.FC<CustomScreenProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: colors.darkTheme, padding: 20 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomScreen;

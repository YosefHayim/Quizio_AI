import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';

interface CustomScreenProps {
  children: ReactNode;
}

const CustomScreen: React.FC<CustomScreenProps> = (props) => {
  return (
    <ScrollView
      className="w-full"
      contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
      <KeyboardAvoidingView className="flex-1">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-light_theme flex-1 p-5">
            <View className="flex-1 items-center justify-center gap-5">{props.children}</View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CustomScreen;

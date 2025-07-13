import { Pressable, StyleProp, StyleSheet, TextInput, TextStyle, View } from 'react-native';
import { ReactElement, useState } from 'react';

import Entypo from '@expo/vector-icons/Entypo';
import { colors } from 'constants/colors';

interface TextInputProps {
  state: string;
  isPassword: boolean;
  showPasswordIcon?: boolean;
  handleInputFn: (v: string) => void;
  placeholderText?: string;
  extraStyle?: StyleProp<TextStyle>;
  icon?: ReactElement;
}

const CustomInput: React.FC<TextInputProps> = ({ ...props }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={[styles.rootContainer, { width: '100%' }]}>
      <TextInput
        secureTextEntry={props.isPassword && !isVisible}
        placeholder={props.placeholderText}
        placeholderTextColor={colors.placehoolderInputText}
        autoCorrect={false}
        style={[styles.textInput, props.extraStyle]}
        onChangeText={props.handleInputFn}
        value={props.state}
      />
      {props.showPasswordIcon && (
        <Pressable onPress={() => setVisible((prev) => !prev)}>
          {isVisible ? (
            <Entypo name="eye-with-line" size={20} color="black" />
          ) : (
            <Entypo name="eye" size={20} color="black" />
          )}
        </Pressable>
      )}
      <View>{props.icon}</View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 8,
    height: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
  },
  textInput: { borderRadius: 16, color: 'black', fontSize: 18, flex: 1, fontWeight: 600 },
});

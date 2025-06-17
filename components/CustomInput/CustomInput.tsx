import { ReactNode, useState } from 'react';
import { Pressable, StyleProp, TextInput, TextStyle, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

interface TextInputProps {
  placeholderText: string;
  placeholderTextColor: string;
  state: string;
  isPassword: boolean;
  showPasswordIcon?: boolean;
  handleInputFn: (v: string) => void;
  containerStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

const CustomInput: React.FC<TextInputProps> = ({ ...props }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={props.containerStyle}>
      <TextInput
        secureTextEntry={props.isPassword && !isVisible}
        placeholder={props.placeholderText}
        placeholderTextColor={props.placeholderTextColor}
        autoCorrect={false}
        style={props.textInputStyle}
        onChangeText={props.handleInputFn}
        value={props.state}
      />
      {props.showPasswordIcon && (
        <Pressable onPress={() => setVisible((prev) => !prev)}>
          {isVisible ? <Entypo name="eye-with-line" size={24} color="white" /> : <Entypo name="eye" size={24} color="white" />}
        </Pressable>
      )}
      <> {props.icon}</>
    </View>
  );
};

export default CustomInput;

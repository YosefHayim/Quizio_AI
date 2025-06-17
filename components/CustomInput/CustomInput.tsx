import { ReactNode, useState } from 'react';
import { Pressable, StyleProp, TextInput, TextStyle, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from 'constants/colors';

interface TextInputProps {
  placeholderText: string;
  state: string;
  isPassword: boolean;
  showPasswordIcon?: boolean;
  handleInputFn: (v: string) => void;
  extraStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

const CustomInput: React.FC<TextInputProps> = ({ ...props }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: colors.cardBackground,
        borderColor: colors.defaultborderButton,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
      }}>
      <TextInput
        secureTextEntry={props.isPassword && !isVisible}
        placeholder={props.placeholderText}
        placeholderTextColor={colors.placehoolderInputText}
        autoCorrect={false}
        style={{ borderRadius: 16, color: 'white', fontSize: 16, flex: 1 }}
        onChangeText={props.handleInputFn}
        value={props.state}
      />
      {props.showPasswordIcon && (
        <Pressable onPress={() => setVisible((prev) => !prev)}>
          {isVisible ? <Entypo name="eye-with-line" size={20} color="white" /> : <Entypo name="eye" size={20} color="white" />}
        </Pressable>
      )}
      <> {props.icon}</>
    </View>
  );
};

export default CustomInput;

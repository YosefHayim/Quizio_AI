import { ReactElement, useState } from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';

import { colors } from 'constants/colors';

interface CustomInputProps {
  state: string;
  showPasswordIcon?: boolean;
  onChangeInput: (v: string) => void;
  isPassword?: boolean;
  placeholderText?: string;
  extraStyle?: string;
  icon?: ReactElement;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <TextInput
      secureTextEntry={props.isPassword && !isVisible}
      placeholder={props.placeholderText}
      placeholderTextColor={colors.placehoolderInputText}
      autoCorrect={false}
      className={` bg-cloud_gray w-full items-center rounded-md p-3 text-xl font-bold text-black ${props.extraStyle}`}
      onChangeText={props.onChangeInput}
      value={props.state}
    />
  );
};

export default CustomInput;

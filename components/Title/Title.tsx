import React from 'react';
import { StyleProp, Text } from 'react-native';

interface TitleProps {
  titleText: string;
  style: StyleProp<any>;
}
const Title: React.FC<TitleProps> = ({ titleText, style }) => {
  return <Text style={style}>{titleText}</Text>;
};

export default Title;

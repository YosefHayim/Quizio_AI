import React from 'react';
import { Text, View } from 'react-native';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Title;

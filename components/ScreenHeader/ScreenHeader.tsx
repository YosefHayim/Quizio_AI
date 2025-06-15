import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import React from 'react';
import { View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  paragraph: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, paragraph }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Title titleText={title} style={{ fontWeight: 'bold' }} />
      <SmallText text={paragraph} />
    </View>
  );
};

export default ScreenHeader;

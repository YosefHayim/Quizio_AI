import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  paragraph: string;
  icon?: ReactNode;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, paragraph, icon }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
        {icon}
        <Title titleText={title} style={{ fontWeight: 'bold' }} />
      </View>
      <SmallText text={paragraph} />
    </View>
  );
};

export default ScreenHeader;

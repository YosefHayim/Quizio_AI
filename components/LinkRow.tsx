import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';

interface LinkRowProps {
  rowName: string;
  children?: ReactElement;
  showArrow?: boolean;
  icon?: ReactElement;
  onPress?: () => void;
}

const LinkRow: React.FC<LinkRowProps> = ({ icon, rowName, children, showArrow = true, onPress }) => {
  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.label}>{rowName}</Text>
        <View style={styles.spacer} />
        {children ? <View>{children}</View> : showArrow ? <AntDesign name="right" size={16} color="gray" /> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
  },
  spacer: {
    flex: 1,
  },
});

export default LinkRow;

import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface StatCardProps {
  titleStatCard: string;
  statCardText: string;
  icon: ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ titleStatCard, statCardText, icon }) => {
  return (
    <View>
      <View>
        <Text>{titleStatCard}</Text>
        {icon}
      </View>
      <Text>{statCardText}</Text>
    </View>
  );
};

export default StatCard;

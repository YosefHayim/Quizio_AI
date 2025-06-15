import { Title } from 'components/Title';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface StatCardProps {
  statCardText: string;
  statCardTitle: string;
  icon: ReactNode;
  statValue: number;
}

const StatCard: React.FC<StatCardProps> = ({ statValue, statCardText, statCardTitle, icon }) => {
  return (
    <View
      style={{
        borderRadius: 6,
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <Title titleText={statCardTitle} />
        <View>{icon}</View>
      </View>
      <Text className="text-xl font-bold text-red-500">{statValue}</Text>
      <Text className="text-sm">{statCardText}</Text>
    </View>
  );
};

export default StatCard;

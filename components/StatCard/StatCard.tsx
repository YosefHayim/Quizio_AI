import { Title } from 'components/Title';
import { Text, View } from 'react-native';

interface StatCardProps {
  statCardText: string;
  statCardTitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ statCardText, statCardTitle }) => {
  return (
    <View>
      <View>
        <Title titleText={statCardTitle} />
      </View>
      <View>
        <Text>{statCardText}</Text>
      </View>
    </View>
  );
};

export default StatCard;

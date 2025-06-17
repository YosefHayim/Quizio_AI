import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { View } from 'react-native';

const ProgressOverviewSection = () => {
  return (
    <View style={{ backgroundColor: 'white', padding: 20, gap: 8 }}>
      <Title titleText="Progress Overview" style={{ fontWeight: 'bold' }} />
      <SmallText text="Your learning journey this month" />
      <View style={{ gap: 16 }}>
        <View style={{ gap: 4 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <SmallText text="Weekly Goal" />
            <SmallText text="7/10 quizzes" />
          </View>
        </View>
        <View style={{ gap: 4 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <SmallText text="Average Score" />
            <SmallText text="85" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressOverviewSection;

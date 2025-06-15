import { ScreenHeader } from 'components/ScreenHeader';
import { View, ScrollView } from 'react-native';
import { CreateQuizSection } from './CreateQuizSection';

const CreateQuizScreen = () => {
  return (
    <ScrollView>
      <View style={{ gap: 16, padding: 16, marginBottom: 25 }}>
        <ScreenHeader title="" paragraph="Transform any YouTube video into an interactive learning experience" />
        <CreateQuizSection />
      </View>
    </ScrollView>
  );
};

export default CreateQuizScreen;

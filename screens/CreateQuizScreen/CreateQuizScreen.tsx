import { ScreenHeader } from 'components/ScreenHeader';
import { View, ScrollView } from 'react-native';
import { CreateQuizSection } from './CreateQuizSection';

const CreateQuizScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }} keyboardDismissMode="on-drag">
      <View style={{ gap: 16, padding: 16, marginBottom: '20%' }}>
        <ScreenHeader title="" paragraph="Transform any YouTube video into an interactive learning experience" />
        <CreateQuizSection />
      </View>
    </ScrollView>
  );
};

export default CreateQuizScreen;

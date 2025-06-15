import { colors } from 'constants/colors';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';

const QuizHistoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView>
      <View style={{ gap: 16, padding: 16, marginBottom: 25 }}>
        <View>
          <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} style={{ borderRadius: 6, backgroundColor: colors.gray }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default QuizHistoryScreen;

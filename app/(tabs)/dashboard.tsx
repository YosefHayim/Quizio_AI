import { Text, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';
import { colors } from 'constants/colors';

const DashboardScreen = () => {
  return (
    <CustomScreen>
      <View style={{ width: '100%' }}>
        <Title titleText="Hello, Jospeh" />
        <Paragraph text={'Keep up the great work'} extraStyle={{ textAlign: 'center' }} />
      </View>
      <View style={{ width: '100%' }}>
        <CustomButton buttonType="confirmaiton" buttonText="Start Daily Challenge" />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 122,
          padding: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            padding: 5,
            width: 60,
            borderRadius: 12,
            shadowOpacity: 0.3,
            shadowOffset: { width: 2, height: 2 },
            elevation: 5,
          }}>
          <Text>XP</Text>
          <MaterialCommunityIcons name="brain" size={24} color="black" />
          <Text>3</Text>
        </View>
        <View
          style={{
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            padding: 5,
            borderRadius: 12,
            shadowOpacity: 0.3,
            shadowOffset: { width: 2, height: 2 },
            elevation: 5,
          }}>
          <Text>Streak</Text>
          <MaterialCommunityIcons name="fire-circle" size={24} color="black" />
          <Text>3</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            padding: 5,
            borderRadius: 12,
            shadowOpacity: 0.3,
            shadowOffset: { width: 2, height: 2 },
            elevation: 5,
          }}>
          <Text>Ranking</Text>
          <FontAwesome6 name="ranking-star" size={24} color="black" />
          <Text>3</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            padding: 5,
            width: 60,
            borderRadius: 12,
            shadowOpacity: 0.3,
            shadowOffset: { width: 2, height: 2 },
            elevation: 5,
          }}>
          <Text>Total</Text>
          <MaterialIcons name="question-answer" size={24} color="black" />
          <Text>3</Text>
        </View>
      </View>
    </CustomScreen>
  );
};

export default DashboardScreen;

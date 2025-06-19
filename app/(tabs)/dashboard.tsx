import { Text, View } from 'react-native';

import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';

const DashboardScreen = () => {
  return (
    <CustomScreen>
      <View style={{ width: '100%' }}>
        <Title titleText="Hello, Jospeh" />
        <Paragraph text={'Keep up the great work'} extraStyle={{ textAlign: 'center' }} />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 100,
          padding: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 5,
            width: 60,
            borderRadius: 12,
          }}>
          <Text>XP</Text>
          <MaterialCommunityIcons name="brain" size={24} color="black" />
          <Text>3500</Text>
        </View>
        <View
          style={{
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 5,
            borderRadius: 12,
          }}>
          <Text>Streak</Text>
          <MaterialCommunityIcons name="fire-circle" size={24} color="black" />
          <Text>3</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 5,
            borderRadius: 12,
          }}>
          <Text>Ranking</Text>
          <FontAwesome6 name="ranking-star" size={24} color="black" />
          <Text>#3</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 5,
            width: 60,
            borderRadius: 12,
          }}>
          <Text>Total</Text>
          <MaterialIcons name="question-answer" size={24} color="black" />
          <Text>3</Text>
        </View>
      </View>
      <View
        style={{
          gap: 8,
          borderColor: 'gray',
          borderWidth: 0.2,
          borderRadius: 20,
          padding: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Paragraph
              text={'Today`s Challenge'}
              extraStyle={{ fontWeight: 'bold', textAlign: 'center' }}
            />
            <Paragraph
              text={'Test your skills with this AI-generated quiz.'}
              extraStyle={{ fontWeight: 'light', textAlign: 'center' }}
            />
          </View>
        </View>
        <View>
          <CustomButton buttonType="confirmaiton" buttonText="Start Daily Challenge" />
        </View>
      </View>
    </CustomScreen>
  );
};

export default DashboardScreen;

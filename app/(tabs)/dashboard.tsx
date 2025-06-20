import { Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Paragraph from 'components/Paragraph';
import { ProgressBar } from 'react-native-paper';
import Title from 'components/Title';
import { router } from 'expo-router';

const DashboardScreen = () => {
  return (
    <CustomScreen>
      <View style={{ width: '100%' }}>
        <Title titleText="Hello, Jospeh" extraStyle={{ marginTop: 100 }} />
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
          <CustomButton buttonType="confirmation" buttonText="Start Daily Challenge" />
        </View>
      </View>
      <View style={{ borderRadius: 15, borderWidth: 0.2, padding: 20 }}>
        <ProgressBar color="black" progress={0.1} style={{ height: 10, borderRadius: 100 }} />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Su</Text>
            <View
              style={{
                borderRadius: 100,
                padding: 10,
                backgroundColor: 'black',
                width: 5,
              }}
            />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Mo</Text>
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tu</Text>
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>We</Text>
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Th</Text>
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Fr</Text>
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
          <View style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Sa</Text>
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
            <View style={{ borderRadius: 100, padding: 10, backgroundColor: 'black', width: 5 }} />
          </View>
        </View>
      </View>
      <View style={{ width: '100%', paddingBottom: 20 }}>
        <CustomButton
          onPress={() => router.replace('/quiz/create')}
          buttonType="confirmation"
          buttonText="Create Quiz"
          icon={<AntDesign name="plus" size={24} color="white" />}
        />
      </View>
    </CustomScreen>
  );
};

export default DashboardScreen;

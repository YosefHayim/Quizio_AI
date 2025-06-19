import { Image, View } from 'react-native';

import Card from 'components/Card';
import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Paragraph from 'components/Paragraph';
import { ProgressBar } from 'react-native-paper';
import { colors } from 'constants/colors';

const DashboardScreen = () => {
  return (
    <CustomScreen>
      <Card extraStyle={{ gap: 16 }}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Paragraph text={'PERFORMENCE'} extraStyle={{ color: 'gray' }} />
          <Paragraph text={'Level 5'} />
        </View>
        <ProgressBar progress={0.5} color={colors.progressBar} style={{ height: 10, borderRadius: 75 }} />
        <Card extraStyle={{ backgroundColor: '#232431', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="clipboard-list" size={24} color="#fff" />
            <Paragraph text={'25'} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="progress-check" size={24} color="#4caf50" />
            <Paragraph text={'25'} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="star-circle" size={24} color="#fdd835" />
            <Paragraph text={'25'} />
          </View>
        </Card>
      </Card>
      <Card extraStyle={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 8 }}>
        <View>
          <Image source={require('../../assets/step-1.png')} style={{ height: 75, width: 75, borderRadius: 10 }} />
        </View>
        <View style={{ flex: 1 }}>
          <Paragraph text={'The Solar System Explained'} />
          <ProgressBar progress={0.5} color={colors.progressBar} style={{ height: 10, borderRadius: 75 }} />
        </View>
        <View>
          <CustomButton buttonType="confirmation" buttonText="Continue" />
        </View>
      </Card>
    </CustomScreen>
  );
};

export default DashboardScreen;

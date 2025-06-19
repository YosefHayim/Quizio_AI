import * as Clipboard from 'expo-clipboard';

import CustomButton from 'components/CustomButton';
import CustomHeader from 'components/CustomHeader';
import CustomInput from 'components/CustomInput';
import CustomScreen from 'components/CustomScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Paragraph from 'components/Paragraph';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

const CreateQuizScreen = () => {
  const [url, setUrl] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);

  const handleExtractYoutubeCaptions = () => {};

  const handlePasteYtUrl = async () => {
    const copiedUrl = await Clipboard.getStringAsync();
    setUrl(copiedUrl);
  };

  return (
    <CustomScreen>
      <View style={{ flex: 1, width: '100%' }}>
        <CustomHeader
          headerName="Create A Quiz"
          navigateBackTo={() => router.navigate('/dashboard')}
        />
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderStyle: 'dashed',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name="youtube" size={50} color="black" />
        </View>
      </View>
      <View style={{ gap: 12, width: '100%' }}>
        <CustomInput isPassword={false} state={url} placeholderText="https://youtube.com/watch?v" />
        <CustomButton
          onPress={handlePasteYtUrl}
          buttonType="confirmation"
          buttonText="Paste"
          icon={<FontAwesome5 name="paste" size={24} color="white" />}
        />
      </View>
      <View>
        <Paragraph text={'Number Of Questions To Generate'} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', gap: 12 }}>
        <View style={{ flex: 1 }}>
          <CustomButton
            onPress={() => setNumberOfQuestions((prev) => Math.max(prev - 1, 0))}
            buttonType="confirmation"
            icon={<FontAwesome5 name="minus" size={24} color="white" />}
          />
        </View>
        <View style={{ width: '20%' }}>
          <CustomInput
            handleInputFn={(v) => setNumberOfQuestions(Number(v))}
            state={numberOfQuestions.toString()}
            isPassword={false}
            placeholderText="Number of questions"
            extraStyle={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <CustomButton
            buttonType="confirmation"
            onPress={() => setNumberOfQuestions((prev) => prev + 1)}
            icon={<FontAwesome5 name="plus" size={24} color="white" />}
          />
        </View>
      </View>
      <CustomButton
        buttonText="Generate Quiz"
        buttonType="confirmation"
        onPress={handleExtractYoutubeCaptions}
      />
    </CustomScreen>
  );
};

export default CreateQuizScreen;

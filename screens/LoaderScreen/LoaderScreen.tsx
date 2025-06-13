import { ActivityIndicator, View } from 'react-native';

const LoaderScreen = () => {
  return (
    <View className="flex-1">
      <ActivityIndicator size="large" className="color-red-400" />
    </View>
  );
};

export default LoaderScreen;

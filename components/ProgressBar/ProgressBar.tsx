import { View } from 'react-native';

interface ProgressBarProps {
  precentOfProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ precentOfProgress }) => {
  return (
    <>
      <View
        style={{
          height: 8,
          backgroundColor: '#e0e0e0',
          borderRadius: 2,
          overflow: 'hidden',
        }}>
        <View
          style={{
            width: `${precentOfProgress}%`,
            height: '100%',
            backgroundColor: 'red',
          }}
        />
      </View>
    </>
  );
};

export default ProgressBar;

import { SmallText } from 'components/SmallText';
import { Title } from 'components/Title';
import { colors } from 'constants/colors';
import { View, Switch } from 'react-native';

interface SettingsRowProps {
  labelText: string;
  explanationText: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsRow: React.FC<SettingsRowProps> = ({ labelText, explanationText, state, setState }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 4, alignContent: 'center' }}>
      <View style={{ gap: 2 }}>
        <Title titleText={labelText} style={{ fontSize: 12, fontWeight: 'bold' }} />
        <SmallText text={explanationText} style={{ fontSize: 8 }} />
      </View>
      <Switch value={state} onValueChange={(v) => setState(v)} trackColor={{ true: colors.red, false: colors.gray }} />
    </View>
  );
};

export default SettingsRow;

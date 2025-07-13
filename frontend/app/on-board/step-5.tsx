import CustomButton from 'components/CustomButton';
import CustomScreen from 'components/CustomScreen';
import CustomText from 'components/CustomText';
import CustomTitle from 'components/CustomTitle';
import GoalSvg from '../../assets/goal.svg';
import { router } from 'expo-router';

const WelcomeScreenStepFour = () => {
  return (
    <CustomScreen>
      <GoalSvg />
      <CustomTitle titleText="Reach your goals" />
      <CustomText
        text="to your goals and beyond Track progress, stay motivated, and level up every day"
        extraStyle="text-center text-xl font-light"
      />
      <CustomButton buttonText="Next" onPress={() => router.push('/on-board/step-6')} />
    </CustomScreen>
  );
};

export default WelcomeScreenStepFour;

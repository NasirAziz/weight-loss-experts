import { StyleSheet, View } from 'react-native';
import ActivityLevel from './screens/ActivityLevel/ActivityLevel';
import BMI from './screens/BMI';
import BMR from './screens/BMR';
import BodyFat from './screens/BodyFat';
import Calories from './screens/Calories';
import ExercisePlan from './screens/ExercisePlan';
import ExerciseVideo from './screens/ExerciseVideo';
import GoalWeight from './screens/GoalWeight/GoalWeight';
import LoginScreen from './screens/Login/Login';
import Results from './screens/Results/Results';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <ActivityLevel />
      {/* <GoalWeight /> */}
      {/* <Results /> */}
      {/* <BMI /> */}
      {/* <BMR /> */}
      {/* <Calories /> */}
      {/* <BodyFat /> */}
      {/* <ExercisePlan /> */}
      {/* <ExerciseVideo /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

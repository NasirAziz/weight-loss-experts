import { Image, StyleSheet, View } from 'react-native';
import AppButton from './components/Button';
import ActivityLevel from './screens/ActivityLevel/ActivityLevel';
import GoalWeight from './screens/GoalWeight/GoalWeight';
// import AppTextInput from './components/TextInput';
import LoginScreen from './screens/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <ActivityLevel />
      {/* <GoalWeight /> */}

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

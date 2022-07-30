import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/Button';
import AppTextInput from './components/TextInput';
import LoginScreen from './screens/Login/Login';
import Screens from './screens/Onboarding/Screens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppTextInput placeholder={"Email"} icon={"email"} />
      <AppButton title={"Sign in"} />
      <StatusBar style="auto" /> */}
      {/* <LoginScreen /> */}
      <Screens />
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

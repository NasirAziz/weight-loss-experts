import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import navigationTheme from './navigationTheme';

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
import PhoneAuth from './screens/PhoneAuth';

import SignUpScreen from './screens/Signup/SignUp';
import ProfileDetails from './screens/Signup/ProfileDetails';
import OnboardingScreen from './screens/Onboarding/OnBoarding';
import DietPlan from './screens/DietPlan/DietPlan';
import DietPlanInfo from './screens/DietPlan/DietPlanInfo';
import HomeScreen from './screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName='OnboardingScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="DietPlan" component={DietPlan} />
        <Stack.Screen name="DietPlanInfo" component={DietPlanInfo} />
        <Stack.Screen name="Signup" component={SignUpScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
        <Stack.Screen name="ExercisePlan" component={ExercisePlan} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Activity" component={ActivityLevel} />
        <Stack.Screen name="BMI" component={BMI} />
        <Stack.Screen name="ExerciseVideo" component={ExerciseVideo} />
        <Stack.Screen name="BMR" component={BMR} />
        <Stack.Screen name="Calories" component={Calories} />
        <Stack.Screen name="BodyFat" component={BodyFat} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GoalWeight" component={GoalWeight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
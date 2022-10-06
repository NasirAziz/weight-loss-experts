import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RootSiblingParent } from 'react-native-root-siblings';

// import ActivityLevel from './screens/ActivityLevel/ActivityLevel';
// import BMI from './screens/BMI';
// import BMR from './screens/BMR';
// import BodyFat from './screens/BodyFat';
// import Calories from './screens/Calories';
// import ExercisePlan from './screens/ExercisePlan';
// import ExerciseVideo from './screens/ExerciseVideo';
// import GoalWeight from './screens/GoalWeight/GoalWeight';
// import LoginScreen from './screens/Login/Login';
// import Results from './screens/Results/Results';
// import PhoneAuth from './screens/PhoneAuth';

// import SignUpScreen from './screens/Signup/SignUp';
// import ProfileDetails from './screens/Signup/ProfileDetails';
// import OnboardingScreen from './screens/Onboarding/OnBoarding';
// import DietPlan from './screens/DietPlan/DietPlan';
// import DietPlanInfo from './screens/DietPlan/DietPlanInfo';
// import HomeScreen from './screens/Home/HomeScreen';

import navigationTheme from './navigationTheme';
import RecipeHome from './screens/RecipesHome/RecipeHome';
import RecipeDetails from './screens/RecipeDetails/RecipeDetails';
import RecipeSearchResult from './screens/RecipeSearchResult/RecipeSearchResult';
import Profile from './screens/Profile/Profile';
import EditProfile from './screens/Profile/EditProfile';
import FoodPreferences from './screens/Profile/FoodPreferences';
import WeightGoals from './screens/Profile/WeightGoals';



// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://production.suggestic.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    "Authorization": 'Token e4a2aaf2883e9a174b8edd44793dabc657418db0',
    "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
  },
});
const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator()

// export function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name='Home' component={Home} />
//       <Tab.Screen name='Profile' component={Profile} />
//       <Tab.Screen name='MachinesList' component={MachinesList} />
//     </Tab.Navigator>
//   )
// }

export default function App() {

  return (
    <ApolloProvider client={client}>
      <RootSiblingParent>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RecipeHome" component={RecipeHome} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
            <Stack.Screen name="RecipeSearchResult" component={RecipeSearchResult} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="FoodPreferences" component={FoodPreferences} />
            <Stack.Screen name="WeightGoals" component={WeightGoals} />
            {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
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
          <Stack.Screen name="GoalWeight" component={GoalWeight} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </RootSiblingParent>
    </ApolloProvider>
  );
}
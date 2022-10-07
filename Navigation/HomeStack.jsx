import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import navigationTheme from '../navigationTheme';

import HomeScreen from '../screens/Home/HomeScreen';
import BMI from '../screens/BMI';
import BMR from '../screens/BMR';
import BodyFat from '../screens/BodyFat';
import Calories from '../screens/Calories';
import ExercisePlan from '../screens/ExercisePlan';
import ExerciseVideo from '../screens/ExerciseVideo';
import Results from '../screens/Results/Results';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        // <NavigationContainer theme={navigationTheme}>

        <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false, animation: "slide_from_right", }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="BMI" component={BMI} />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="ExerciseVideo" component={ExerciseVideo} />
            <Stack.Screen name="ExercisePlan" component={ExercisePlan} />
            <Stack.Screen name="BMR" component={BMR} />
            <Stack.Screen name="Calories" component={Calories} />
            <Stack.Screen name="BodyFat" component={BodyFat} />
        </Stack.Navigator>


        // </NavigationContainer>
    );
}
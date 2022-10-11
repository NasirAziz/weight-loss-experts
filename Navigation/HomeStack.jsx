import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/Home/HomeScreen';
import BMI from '../screens/BMI';
import BMR from '../screens/BMR';
import BodyFat from '../screens/BodyFat';
import Calories from '../screens/Calories';
import ExercisePlan from '../screens/ExercisePlan';
import ExerciseVideo from '../screens/ExerciseVideo';
import Results from '../screens/Results/Results';
import DietPlan from '../screens/DietPlan/DietPlan';
import RecipeDetails from '../screens/DietPlan/RecipeDetails';
import ShoppingList from '../screens/ShoppingList/ShoppingList';
import MealSwap from '../screens/DietPlan/MealSwap';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        // <NavigationContainer theme={navigationTheme}>

        <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false, animation: "slide_from_right", }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DietPlan" component={DietPlan} />
            <Stack.Screen name="RecipeDetails2" component={RecipeDetails} />
            <Stack.Screen name="MealSwap" component={MealSwap} />
            <Stack.Screen name="ShoppingList" component={ShoppingList} />
            <Stack.Screen name="ExercisePlan" component={ExercisePlan} />
            <Stack.Screen name="ExerciseVideo" component={ExerciseVideo} />
            <Stack.Screen name="BMI" component={BMI} />
            <Stack.Screen name="BMR" component={BMR} />
            <Stack.Screen name="BodyFat" component={BodyFat} />
            <Stack.Screen name="Calories" component={Calories} />
            <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>


        // </NavigationContainer>
    );
}
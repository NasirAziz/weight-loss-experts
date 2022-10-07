import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import RecipeHome from '../screens/RecipesHome/RecipeHome';
import RecipeDetails from '../screens/RecipeDetails/RecipeDetails';
import RecipeSearchResult from '../screens/RecipeSearchResult/RecipeSearchResult';


const Stack = createNativeStackNavigator();

export default function RecipesStack() {
    return (

        <Stack.Navigator initialRouteName='RecipeHome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RecipeHome" component={RecipeHome} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
            <Stack.Screen name="RecipeSearchResult" component={RecipeSearchResult} />

        </Stack.Navigator>

    );
}
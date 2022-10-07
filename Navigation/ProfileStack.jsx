import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import navigationTheme from '../navigationTheme';

import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile';
import FoodPreferences from '../screens/Profile/FoodPreferences';
import WeightGoals from '../screens/Profile/WeightGoals';
import UnitPreference from '../screens/Profile/UnitPreference';


const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        // <NavigationContainer theme={navigationTheme}>

        <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="FoodPreferences" component={FoodPreferences} />
            <Stack.Screen name="WeightGoals" component={WeightGoals} />
            <Stack.Screen name="UnitPreference" component={UnitPreference} />
        </Stack.Navigator>


        // </NavigationContainer>
    );
}
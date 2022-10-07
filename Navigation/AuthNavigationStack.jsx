import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../screens/Login/Login';
import SignUpScreen from '../screens/Signup/SignUp';
import OnboardingScreen from '../screens/Onboarding/OnBoarding';


const Stack = createNativeStackNavigator();

export default function AuthNavigationStack() {
    return (

        <Stack.Navigator initialRouteName='OnboardingScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        </Stack.Navigator>

    );
}
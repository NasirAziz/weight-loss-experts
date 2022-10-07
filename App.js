import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RootSiblingParent } from 'react-native-root-siblings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from "react-native"


import navigationTheme from './navigationTheme';
import HomeStack from './Navigation/HomeStack';
import ProfileStack from './Navigation/ProfileStack';
import AuthNavigationStack from './Navigation/AuthNavigationStack';
import RecipesStack from './Navigation/RecipesStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './config/colors';



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

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='HomeStack'
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props}>
            <MaterialCommunityIcons name='home' size={30} color={props.accessibilityState.selected ? colors.primary : colors.medium} />
            <Text style={{ color: props.accessibilityState.selected ? colors.primary : colors.medium, fontSize: 10 }}>{"Home"}</Text>
          </TouchableOpacity>,
          tabBarActiveTintColor: colors.medium
        }}
        component={HomeStack} />
      <Tab.Screen name="RecipesStack" component={RecipesStack}
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props}>
            <MaterialCommunityIcons name='food-turkey' size={30} color={props.accessibilityState.selected ? colors.primary : colors.medium} />
            <Text style={{ color: props.accessibilityState.selected ? colors.primary : colors.medium, fontSize: 10 }}>{"Recipes"}</Text>
          </TouchableOpacity>,
          tabBarActiveTintColor: colors.medium
        }} />
      <Tab.Screen name="ProfileStack" component={ProfileStack}
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props}>
            <MaterialCommunityIcons name='account' size={30} color={props.accessibilityState.selected ? colors.primary : colors.medium} />
            <Text style={{ color: props.accessibilityState.selected ? colors.primary : colors.medium, fontSize: 10 }}>{"Profile"}</Text>
          </TouchableOpacity>,
          tabBarActiveTintColor: colors.medium
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [user, setUser] = React.useState(true)
  return (
    <ApolloProvider client={client}>
      <RootSiblingParent>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            {user ?
              <Stack.Screen name="HomeTab" component={TabNavigator} />
              :
              <Stack.Screen name="AuthNav" component={AuthNavigationStack} />
            }


          </Stack.Navigator>
        </NavigationContainer>
      </RootSiblingParent>
    </ApolloProvider>
  );
}
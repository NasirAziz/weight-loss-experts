import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { ApolloClient, InMemoryCache, } from '@apollo/client';

import AppText from '../../components/Text';
import Screen from '../../components/Screen';
import ReceipeResult from './ReceipeResult';
import RECIPE_SEARCH from '../../Backend/Suggestic/Queries/recipeSearch';


const client2 = new ApolloClient({
    uri: 'https://production.suggestic.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": 'Token e4a2aaf2883e9a174b8edd44793dabc657418db0',
        "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
    },
});

const MyComponent = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search by name or ingredients"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon={"magnify"}
            onIconPress={() => {
                client2.query({ query: RECIPE_SEARCH, variables: { query: searchQuery } })
                    .then((data) => {
                        navigation.navigate("RecipeSearchResult", { data })
                    })
            }}
            showSoftInputOnFocus={true}
            onEndEditing={() => {
                client2.query({ query: RECIPE_SEARCH, variables: { query: searchQuery } })
                    .then((data) => {
                        navigation.navigate("RecipeSearchResult", { data })
                    })
            }}

        />
    );
};


export default function RecipeSearchResult({ route, navigation }) {
    const { data } = route.params.data;
    return (
        <Screen>
            <View style={{ padding: 20 }}>
                <MyComponent navigation={navigation} />
            </View>

            <ScrollView>

                <View style={{ padding: 20 }}>
                    <AppText style={{ fontWeight: "bold", fontSize: 24 }}>On Plan</AppText>
                    <AppText style={{ fontSize: 16, marginBottom: 10 }}>Results that are recommended for you and based on your program and preferences</AppText>
                    {data.searchRecipeByNameOrIngredient.onPlan.map((item, index) => {
                        return <ReceipeResult onPress={() => navigation.navigate("RecipeDetails", { item })} recipe={item} isLastElement={index === data.searchRecipeByNameOrIngredient.onPlan.length - 1} />
                    })}
                </View>
                <View style={{ padding: 20 }}>
                    <AppText style={{ fontWeight: "bold", fontSize: 24 }}>Other</AppText>
                    <AppText style={{ fontSize: 16, marginBottom: 10 }}>Results that match your search but are outside of your program and preferences</AppText>
                    {data.searchRecipeByNameOrIngredient.otherResults.map((item, index) => {
                        return <ReceipeResult onPress={() => navigation.navigate("RecipeDetails", { item })} recipe={item} isOther={true} isLastElement={index === data.searchRecipeByNameOrIngredient.onPlan.length - 1} />
                    })}
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({})
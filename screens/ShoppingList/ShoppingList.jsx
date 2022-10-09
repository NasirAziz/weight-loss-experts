import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ApolloClient, InMemoryCache, useQuery, useMutation, gql } from '@apollo/client';


import AppText from '../../components/Text'
import AppLoading from '../AppLoading';
import SHOPPING_LIST from '../../Backend/Suggestic/Queries/shoppingList';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';
import AppButton from '../../components/Button';
import BackButton from '../../components/BackButton';


const client = new ApolloClient({
    uri: 'https://production.suggestic.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": "Token e4a2aaf2883e9a174b8edd44793dabc657418db0",
        "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
    },
});


function EmptyShoppingList({ navigation }) {
    return <Screen>
        <View style={{ backgroundColor: colors.white, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

            <BackButton onPress={() => navigation.goBack()} style={{ position: "relative", marginTop: 40, paddingStart: 5 }} />
            <AppText style={{ fontWeight: "bold", fontSize: 22 }}>Shopping List</AppText>
            <AppText style={{ fontWeight: "bold", fontSize: 22, color: colors.white }}>..as</AppText>

        </View>
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, }}>
            <MaterialCommunityIcons name='cart-variant' size={60} color={colors.primary} />
            <AppText style={{ fontSize: 26, paddingVertical: 20 }}>Shopping List is Empty</AppText>
        </View>
    </Screen>
}

export default function ShoppingList({ navigation }) {
    const { loading, error, data } = useQuery(SHOPPING_LIST,)
    if (loading) return <AppLoading />;
    if (error) console.log(JSON.stringify(error));
    if (data.shoppingList.edges.length <= 0) return <EmptyShoppingList navigation={navigation} />

    let arr1 = []
    let arr2 = []
    //get all recipes names in arr1
    arr1 = data.shoppingList.edges.map(item => item.node.recipeName)
    //remove duplicates
    arr1 = arr1.filter(function (elem, pos) {
        return arr1.indexOf(elem) == pos;
    })

    //get corresponding ingredients of each recipe
    arr2 = arr1.map(recipe => {
        let ing = data.shoppingList.edges.filter(item => {
            if (item.node.recipeName === recipe)
                return item.node.ingredientLine
        })

        return ing

    })
    //remove undefined/null values
    // arr2 = arr2.map(subarray => subarray.filter(el => el != null));
    const onClear = () => {
        client.mutate({
            mutation: gql`
            mutation {
                clearShoppingList {
                    success
                }
            }
        `},).then((data) => {
                navigation.goBack()
            }).catch((err) => {
                Toast.show("Something went wrong please try again " + err)
            })
    }
    return (
        <Screen style={{ backgroundColor: colors.light }}>
            <View style={{ backgroundColor: colors.white, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                <BackButton onPress={() => navigation.goBack()} style={{ position: "relative", marginTop: 40, paddingStart: 5 }} />
                <AppText style={{ fontWeight: "bold", fontSize: 22 }}>Shopping List</AppText>
                <AppText style={{ fontWeight: "bold", fontSize: 22, color: colors.white }}>..as</AppText>

            </View>
            <ScrollView>

                {arr1.map((recipeName, pos) => {
                    let item = arr2.map((subArray, index) => {
                        if (pos === index) return <ShoppingRecipeItem key={index} recipeTitle={recipeName} ingredientsArray={subArray} position={index} />
                    })
                    return item
                })}
            </ScrollView>
            <AppButton title={"Clear Shopping List"} onPress={onClear} />
        </Screen>
    )
}



function ShoppingRecipeItem({ recipeTitle, ingredientsArray, servings, position }) {

    return (
        <View style={{ backgroundColor: colors.white, marginVertical: 5 }}>
            <View style={{ padding: 20, }}>

                <AppText style={{ fontWeight: "bold", fontSize: 22 }}>{recipeTitle}</AppText>
                <View style={{ alignItems: "center", flexDirection: "row", marginTop: 5 }}>

                    <AppText style={{ fontSize: 15 }}>Number of servings: </AppText>
                    <AppText style={{ fontSize: 15 }}>{ingredientsArray[position].node.numberOfServings}</AppText>
                </View>
            </View>
            <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />
            {ingredientsArray.map(data => <IngredientItem key={data.node.databaseId} data={data} />)}

        </View>
    )
}

function IngredientItem({ data }) {

    const [isChecked, setIsChecked] = useState(data.node.isDone)
    const onPress = () => {
        client.mutate({
            mutation: gql`
        mutation {
            toggleShoppingListItem(
                itemId:"${data.node.databaseId}"
                isAggregate:false
            ){
                success
            }
        }
        `},).then((data) => {
                setIsChecked(!isChecked)
            }).catch((err) => {
                Toast.show("Something went wrong please try again " + err)
            })
    }
    return (
        <Pressable onPress={onPress} style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 15, alignItems: "center" }}>
            <MaterialCommunityIcons name={isChecked ? "check-circle" : "circle-outline"} size={25} color={isChecked ? colors.primary : colors.medium} />
            <AppText style={{ paddingHorizontal: 10, }}>{data.node.ingredientLine}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({})
import React, { useState } from 'react'
import { StyleSheet, View, Image, ScrollView, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMutation, ApolloClient, InMemoryCache, } from '@apollo/client';
import { Snackbar } from 'react-native-paper';

import AppText from "../../components/Text"
import AppButton from "../../components/Button"
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import ADD_TO_SHOPPING_LIST from '../../Backend/Suggestic/Mutaions/addToShoppingList';
import ADD_TO_USER_FAVORITE from '../../Backend/Suggestic/Mutaions/addTouserFavorite';


const client2 = new ApolloClient({
    uri: 'https://production.suggestic.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": 'Token e4a2aaf2883e9a174b8edd44793dabc657418db0',
        "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
    },
});


function MySnackbar({ msg, visible2 }) {
    const [visible, setVisible] = React.useState(visible2);

    const onDismissSnackBar = () => setVisible(false);
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
                label: 'Undo',
                onPress: () => {
                    // Do something
                },
            }}>
            {msg}
        </Snackbar>
    )
}

function FavIcon({ isFav, id }) {
    const [isUserFav, setIsUSerFav] = useState(isFav)
    return (
        <>
            <Pressable onPress={() => {
                client2.mutate({ mutation: ADD_TO_USER_FAVORITE, variables: { recipeId: id } })
                    .then((data) => {
                        client2.resetStore()
                        setIsUSerFav(data.data.userFavoriteRecipe.isUserFavorite)
                        console.log(data.data.userFavoriteRecipe.isUserFavorite)
                    }).catch((err) => console.log(JSON.stringify(err, null, 2)))
            }}>
                <MaterialCommunityIcons name="heart" size={34} color={isUserFav ? "red" : "grey"} />
            </Pressable >
        </>
    )
}

export default function RecipeDetails({ route }) {
    const { item } = route.params;

    const [addToSoppingListM] = useMutation(ADD_TO_SHOPPING_LIST, {
        variables: { recipeId: item.databaseId },
        onCompleted: data => {
            console.log(data);
        }
    })

    return (
        <Screen>

            <ScrollView>

                {/*  */}
                <View style={{ height: 200, width: "100%" }}>
                    <Image style={{ height: 200, width: "100%" }} source={{ uri: item.mainImage }} />{/* {uri:Item.mainImage} */}
                </View>
                {/*  */}
                <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 30 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingEnd: 10 }}>
                        <AppText style={styles.recipeText}>RECIPE</AppText>
                        <FavIcon id={item.databaseId} isFav={item.isUserFavorite} />
                    </View>
                    <AppText style={styles.heading}>{item.name}</AppText>
                </View>
                <View style={{ width: "100%", backgroundColor: "#D3D3D3", height: 1 }} />

                <View style={styles.extrasContainer}>
                    <AppText style={styles.extras}>{item.totalTime}</AppText>
                    <AppText style={styles.extras}>{item.numberOfServings} servings</AppText>
                    <AppText style={styles.extras}>{item.ingredients.length} ingredients</AppText>
                </View>
                <View style={{ width: "100%", backgroundColor: "#fafafa", height: 15 }} />
                {/*  */}
                <AppText style={styles.title}>Adherence</AppText>
                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />

                <View style={[styles.container, { flexDirection: 'row', paddingHorizontal: 0 }]}>
                    <View style={{
                        borderWidth: 3,
                        borderRadius: 100, justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 20,
                        borderColor: item.adherenceDetails.color.toLowerCase(),
                        width: 50, height: 50
                    }}>
                        <AppText style={{ fontWeight: "bold", color: colors.dark }}>{item.adherenceDetails.score.toString().slice(0, 1)[0]}</AppText>
                    </View>
                    <AppText style={styles.adherenceTitle}>{item.adherenceDetails.title}</AppText>
                </View>

                <View style={{ width: "100%", backgroundColor: "#fafafa", height: 15 }} />

                {/*  */}

                <AppText style={styles.title}>Ingredients</AppText>
                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />

                <View style={[styles.container, { alignItems: "flex-start", justifyContent: "center", }]}>
                    {item.ingredientLines.map((ingredient, index) => {
                        return <View key={index} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                            <MaterialCommunityIcons key={index + 50} name='circle' color={colors.dodgerblue} />
                            <AppText key={index + 100} style={{ margin: 10 }}>{ingredient}</AppText>
                        </View>
                    })}
                    <AppButton title={"ADD TO SHOPPING LIst"} onPress={() => {
                        addToSoppingListM()
                    }} />
                </View>

                <View style={{ width: "100%", backgroundColor: "#fafafa", height: 15 }} />
                {/*  */}
                <AppText style={styles.title}>Instructions</AppText>
                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />

                <View style={[styles.container, { alignItems: "flex-start", justifyContent: "flex-start", }]}>
                    {item.instructions.map((instruction, index) => {
                        return < >
                            <AppText key={index} style={{ margin: 10, fontSize: 16, fontFamily: "serif" }}>{instruction}</AppText>
                            {index !== item.instructions.length - 1 && <View key={instruction} style={{ width: "100%", backgroundColor: colors.grey, height: 1, opacity: 0.2, margin: 10 }} />}

                        </>
                    })}
                </View>
                <View style={{ width: "100%", backgroundColor: "#fafafa", height: 15 }} />
                {/*  */}

                <AppText style={styles.title}>Nutrition per serving</AppText>
                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />

                <View>
                    <View style={{
                        backgroundColor: "#f4f4f4",
                        flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        marginVertical: 5
                    }}>

                        <AppText style={styles.nutritionBold}>Calories</AppText>
                        <AppText style={styles.nutritionBold}>{Math.round(item.nutritionalInfo.calories * 10000) / 10} kcal</AppText>
                    </View>
                    <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />


                    <View style={{
                        backgroundColor: "#f4f4f4",
                        flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        marginVertical: 15
                    }}>

                        <AppText style={styles.nutritionBold}>Carbs</AppText>
                        <AppText style={styles.nutritionBold}>{Math.round(item.nutritionalInfo.carbs * 10000) / 10} g</AppText>
                    </View>

                </View>

                <View style={{
                    // backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionLight}>Net Carbs</AppText>
                    <AppText style={styles.nutritionLight}>{Math.round(item.nutritionalInfo.netcarbs * 10000) / 10} g</AppText>
                </View>


                <View style={{
                    // backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionLight}>Sugars</AppText>
                    <AppText style={styles.nutritionLight}>{Math.round(item.nutritionalInfo.sugar * 10000) / 10} g</AppText>
                </View>


                <View style={{
                    // backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionLight}>Fiber</AppText>
                    <AppText style={styles.nutritionLight}>{Math.round(item.nutritionalInfo.fiber * 10000) / 10} g</AppText>
                </View>

                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />
                <View style={{
                    backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 5
                }}>
                    <AppText style={styles.nutritionBold}>Protein</AppText>
                    <AppText style={styles.nutritionBold}>{Math.round(item.nutritionalInfo.protein * 10000) / 10} g</AppText>
                </View>
                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />



                <View style={{
                    backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionBold}>Fat</AppText>
                    <AppText style={styles.nutritionBold}>{Math.round(item.nutritionalInfo.fat * 10000) / 10} g</AppText>
                </View>




                <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1 }} />
                <View style={{
                    backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 5
                }}>
                    <AppText style={styles.nutritionBold}>Other</AppText>
                </View>

                <View style={{
                    // backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionLight}>Iron</AppText>
                    <AppText style={styles.nutritionLight}>{Math.round(item.nutritionalInfo.iron * 10000) / 10} mg</AppText>
                </View>

                <View style={{
                    // backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionLight}>Colesterol</AppText>
                    <AppText style={styles.nutritionLight}>{Math.round(item.nutritionalInfo.cholesterol * 10000) / 10} mg</AppText>
                </View>

                <View style={{
                    // backgroundColor: "#f4f4f4",
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    marginVertical: 15
                }}>

                    <AppText style={styles.nutritionLight}>Sodium</AppText>
                    <AppText style={styles.nutritionLight}>{Math.round(item.nutritionalInfo.sodium * 10000) / 10} mg</AppText>
                </View>

                <View style={{ width: "100%", backgroundColor: "#fafafa", height: 15 }} />
                {/*  */}

            </ScrollView>
        </Screen >
    )
}


const styles = StyleSheet.create({
    adherenceTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.dark,
        paddingRight: 100,
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        alignItems: "center"
    },
    recipeText: {
        color: colors.grey,
        fontWeight: "bold",
        opacity: 0.5
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 0
    }, extras: {
        textTransform: "uppercase",
        fontSize: 14
    }, extrasContainer: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    }, title: {
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 20,
        textTransform: "uppercase",

    }, nutritionBold: {
        fontSize: 15,
        fontWeight: "bold",
    }, nutritionLight: {
        fontSize: 15,
    }
})
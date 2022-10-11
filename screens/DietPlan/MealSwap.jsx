import { StyleSheet, Image, View, TouchableOpacity, ScrollView, Text } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'

import AppText from '../../components/Text'
import similarRecipes from '../../Backend/Suggestic/Queries/similarRecipes'
import AppLoading from '../AppLoading'
import Screen from '../../components/Screen'
import useAuth from '../../authentication/useAuth'
import BackButton from '../../components/BackButton'
import colors from '../../config/colors'
import SWAPE_MEAL_PLAN_RECIPE from '../../Backend/Suggestic/Mutaions/swapMealPlanRecipe'

export default function MealSwap({ navigation, route }) {
    const { user } = useAuth()
    const { recipe, mealId } = route.params
    const { loading, error, data } = useQuery(similarRecipes, { variables: { recipeId: recipe.id }, context: { headers: { "sg-user": user.user_id } } })
    const [update] = useMutation(SWAPE_MEAL_PLAN_RECIPE, { context: { headers: { "sg-user": user.user_id } } })

    if (error) return console.log(JSON.stringify(error, null, 2))

    if (loading) return <AppLoading />

    const onPress = (index) => {
        console.log(data.similarMacrosRecipes[index])
        update({
            variables: {
                recipeId: data.similarMacrosRecipes[index].id,
                mealId: mealId
            }
        }).then((data) => {
            console.log(data)
            // navigation.navigate("DietPlan", { name: "asdsd" })
            navigation.pop(2)
        }).catch((err) => console.log(JSON.stringify(err, null, 2)))
    }
    return (
        <Screen>
            <View style={{ flexDirection: "row", backgroundColor: colors.white, justifyContent: "center", alignItems: "center", padding: 25 }}>
                <BackButton style={{ position: "relative", top: 5, left: -25 }} onPress={() => navigation.goBack()} />
                <AppText style={{ fontSize: 20, textAlign: "center", }}>Click on a recipe to swap with</AppText>

            </View>
            <ScrollView>

                {data.similarMacrosRecipes.map((recipe, index) => <RecipeSwapItem recipe={recipe} onPress={() => onPress(index)} />)}
            </ScrollView>
        </Screen>
    )
}

function RecipeSwapItem({ recipe, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ alignItems: "center", marginVertical: 15, width: "100%", backgroundColor: colors.white }}>
            <Image style={{ width: "90%", height: 140, borderRadius: 8 }} source={{ uri: recipe.mainImage }} />
            <View style={{ paddingStart: 10, alignItems: "flex-start", width: "90%" }}>

                <AppText style={{ fontWeight: "bold", fontSize: 18, paddingEnd: 0, }}>{recipe.name}</AppText>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", flex: 1, width: "100%" }}>
                    <AppText style={{ fontSize: 15, }}>{"Eat servings: " + recipe.serving}</AppText>
                    <AppText style={{ fontSize: 15, }}>{"Servings: " + recipe.numberOfServings}</AppText>
                    <AppText style={{ fontSize: 15, }}>{"Rating: " + recipe.adherenceDetails.score.toString()[0]}</AppText>
                </View>

                <AppText style={{ fontSize: 16, paddingTop: 8, fontWeight: "bold", width: "100%" }}>{"Nutitions per serving"}</AppText>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%" }}>
                    <AppText style={{ fontSize: 15, }}>{"Calories: " + recipe.nutrientsPerServing.calories}</AppText>
                    <AppText style={{ fontSize: 15, }}>{"Protein: " + recipe.nutrientsPerServing.carbs}</AppText>
                    <AppText style={{ fontSize: 15 }}>{" Carbs: " + recipe.nutrientsPerServing.protein}</AppText>
                </View>



            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({})
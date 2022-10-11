import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DietPlanItem from './DietPlanItem'

export default function DietPlanDayItem({ mealPlan, isToday, navigation }) {

    const onPress = (index) => navigation.navigate("RecipeDetails2",
        { item: mealPlan.meals[index].recipe })

    const handleSwape = (index) => navigation.navigate("MealSwap",
        { recipe: mealPlan.meals[index].recipe, mealId: mealPlan.meals[index].id })
    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{"DAY " + mealPlan.day}</Text>
                {isToday && <Text style={{ fontSize: 18, }}>Today</Text>}
            </View>
            {mealPlan.meals.map((meal, index) => <DietPlanItem key={index}
                onPress={() => onPress(index)}
                handleSwape={() => handleSwape(index)}
                recipe={meal.recipe} meal={meal.meal}
                servings={meal.numOfServings}
                isToday={isToday} />)}
        </View>
    )
}

const styles = StyleSheet.create({})
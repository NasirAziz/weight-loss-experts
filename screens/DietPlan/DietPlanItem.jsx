import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import AppText from '../../components/Text'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function DietPlanItem({ recipe, onPress, meal, servings, handleSwape, isToday = false }) {
    return (
        <View style={{ flexDirection: "row", padding: 10, margin: 5, backgroundColor: colors.white, borderRadius: 8, alignItems: "center" }}>
            <Pressable onPress={onPress} style={{ justifyContent: "center", flexDirection: "row", flex: 1 }}>
                <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: recipe.mainImage }} />
                <View style={{ justifyContent: "space-evenly", paddingStart: 10, flex: 1 }}>

                    <AppText style={{ textTransform: "uppercase", fontSize: 13 }}>{meal}</AppText>

                    <AppText style={{ fontWeight: "bold", fontSize: 15, paddingEnd: 0, width: "80%" }}>{recipe.name}</AppText>

                    <AppText style={{ fontSize: 13 }}>{"Eat servings " + servings}</AppText>

                </View>
            </Pressable>
            {isToday && <Pressable onPress={handleSwape}>
                <MaterialCommunityIcons name='swap-horizontal-circle-outline' size={28} color={colors.medium} />
            </Pressable>}
        </View>

    )
}

const styles = StyleSheet.create({})
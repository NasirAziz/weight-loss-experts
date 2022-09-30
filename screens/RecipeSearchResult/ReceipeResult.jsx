import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import AppText from '../../components/Text'

export default function ReceipeResult({ recipe, isLastElement = false, onPress, isOther = false }) {
    return (
        <Pressable onPress={onPress} style={{ marginVertical: 10, justifyContent: "center", }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ width: 80, height: 80, borderRadius: 5 }} source={{ uri: recipe.mainImage }} />
                <View style={{ justifyContent: "space-evenly", paddingEnd: 80, paddingStart: 10, width: "100%" }}>
                    <AppText style={{ fontWeight: "bold" }}>{recipe.name}</AppText>

                    <AppText>{isOther ? `Not Recommended` : "Rating: " + recipe.adherenceDetails.score.toString().slice(0, 1)[0] + "/10"}</AppText>
                </View>
            </View>
            {!isLastElement && <View style={{ width: "100%", backgroundColor: "#d6d6d6", height: 1, marginTop: 10 }} />}
        </Pressable>
    )
}

const styles = StyleSheet.create({})
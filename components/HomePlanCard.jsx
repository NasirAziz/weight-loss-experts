import { ImageBackground, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import AppText from './Text'
import colors from '../config/colors'

export default function HomePlanCard({ onPress, text, image }) {
    return (
        <TouchableOpacity style={styles.Card} onPress={onPress}>

            <ImageBackground style={{ flex: 1, justifyContent: "center", }} source={image}>
                <AppText style={{ marginTop: 5, textAlign: "center", color: colors.dark, fontWeight: "bold", }}>{text}</AppText>
            </ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Card: {
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: '#fff',
        height: 110,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
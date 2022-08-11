import { StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import AppText from './Text'
import colors from '../config/colors'

export default function HomeButton({ onPress, text, icon }) {
    return (

        <TouchableOpacity style={styles.Card} onPress={onPress}>
            {icon}
            <AppText style={{ marginTop: 5, textAlign: "center", color: colors.primary, fontWeight: "bold" }}>{text}</AppText>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 20,
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
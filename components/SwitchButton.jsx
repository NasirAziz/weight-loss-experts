import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './Text'
import colors from '../config/colors'

export default function SwitchButton({ isActive, onPress, title, style }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, {
                elevation: isActive ? 5 : 0,
                backgroundColor: isActive ? colors.primary : "#fff",

                borderColor: isActive ? "#fff" : colors.primary,
            }, style]}>
            <AppText style={{ color: isActive ? "#fff" : colors.primary, }}>{title}</AppText>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        width: "23%",
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    }
})
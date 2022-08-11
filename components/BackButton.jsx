import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BackIcon from '../assets/BackIcon.svg';


export default function BackButton({ onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.back, style]}>
            <BackIcon />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        top: -10,
        left: 15,
        width: 30,
        height: 30,
        zIndex: 1
    },
})
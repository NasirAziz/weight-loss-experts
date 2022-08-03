import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from './Text'
import colors from '../config/colors';


export default function ResultCircle({ result, unit, style }) {
    return (
        <View style={styles.container}>
            <View style={[style, styles.circle]} >
                <Text style={styles.text}>
                    {result}
                </Text>
                <AppText style={styles.unit}>
                    {unit}
                </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        backgroundColor: "#82D6AE",
        borderRadius: 1000,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.45,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        // display: "flex",
    }, text: {
        fontSize: 55,
        fontWeight: 'bold',
        color: colors.light,
        textTransform: 'uppercase',
    }, unit: {
        fontSize: 18,
        color: colors.light,
        fontWeight: 'bold',

    }
})
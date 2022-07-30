import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

import AppText from '../../components/Text'
import colors from '../../config/colors'


export default function OnBoarding() {

    return (
        <View style={{ flex: 1, width: "100%", }}>
            <img style={{ width: "100%", }} src={require("../../assets/TopWave1.svg")} />

            <View style={{ flexDirection: 'row', width: "100%", marginVertical: 10 }}>
                <AppText style={styles.title}>Weight Loss Experts</AppText>
                <AppText style={styles.link}>Skip</AppText>
            </View>

            <View>
                <AppText style={{ textAlign: "center", marginVertical: 40 }}>Slider Here</AppText>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
        fontSize: 20,
        width: "100%",
        marginRight: "-15%",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    link: {
        color: colors.primary,
        fontSize: 10,
        marginVertical: "auto"
        // textAlign: "center",
    },
});
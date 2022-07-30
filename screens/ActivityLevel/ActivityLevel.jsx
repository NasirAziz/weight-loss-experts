import { StyleSheet, View } from 'react-native'
import React from 'react'

import AppText from '../../components/Text'
import SwitchButton from '../../components/SwitchButton'
import colors from '../../config/colors'
import Slider from 'react-native-material-slider'

export default function ActivityLevel() {
    const [isScaleActive, setIsScaleActive] = React.useState(true)
    const [isCustomActive, setIsCustomActive] = React.useState(false)
    const [sliderValue, setSliderValue] = React.useState(0)
    const [customValue, setCustomValue] = React.useState(0)
    return (
        <View style={{ flex: 1, width: "100%", }}>
            <img style={{ width: "100%", }} src={require("../../assets/TopWave1.svg")} />

            <AppText style={styles.title}>Tell us about your<br></br>Activity level</AppText>
            <View style={{ flexDirection: 'row', alignSelf: "center", width: "100%", marginVertical: 10, justifyContent: "space-around" }}>

                <SwitchButton
                    style={{ flex: 1, marginHorizontal: 20 }}
                    isActive={isScaleActive} title={"Scale"} onPress={() => {
                        setIsScaleActive(true)
                        setIsCustomActive(false)
                    }} />

                <SwitchButton
                    style={{ flex: 1, marginHorizontal: 20 }}
                    isActive={isCustomActive} title={"Custom"} onPress={() => {
                        setIsScaleActive(false)
                        setIsCustomActive(true)
                    }} />

            </View >

            <View style={styles.card}>
                <img style={{ height: 80 }} src={require("../../assets/running-women.png")} />
                <AppText style={styles.title}>Mid</AppText>
                <Slider
                    value={sliderValue}
                    onValueChange={(e) => setSliderValue(e)}
                    step={10}
                    stickyPin
                />


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: "50%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    title: {
        fontSize: 25,
        fontWeight: "500",
        color: colors.dark,
        textAlign: "center",
        marginVertical: 10
    }
})
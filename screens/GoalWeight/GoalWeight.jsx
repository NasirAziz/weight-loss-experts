import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'

import AppText from '../../components/Text'
import SwitchButton from '../../components/SwitchButton'
import colors from '../../config/colors'
import AppButton from '../../components/Button'
import AppTextInput from '../../components/TextInput'

import BMI from "../../assets/women-bmi.svg"
import TopWave1 from '../../components/TopWave1'


export default function GoalWight({ navigation }) {
    const [isScaleActive, setIsScaleActive] = React.useState(true)
    const [isCustomActive, setIsCustomActive] = React.useState(false)
    const [sliderValue, setSliderValue] = React.useState(0)
    const [customValue, setCustomValue] = React.useState(0)
    return (
        <>
            <TopWave1 />
            <View style={{ flex: 1, width: "100%", padding: 10, }}>

                <AppText style={styles.title}>{"What is your\nGoal Weight"}</AppText>
                <View style={{ flexDirection: 'row', alignSelf: "center", width: "100%", marginVertical: 10, justifyContent: "space-around" }}>

                    <SwitchButton
                        style={{ flex: 1, marginHorizontal: 25 }}
                        isActive={isScaleActive} title={"Scale"} onPress={() => {
                            setIsScaleActive(true)
                            setIsCustomActive(false)
                        }} />

                    <SwitchButton
                        style={{ flex: 1, marginHorizontal: 25 }}

                        isActive={isCustomActive} title={"Custom"} onPress={() => {
                            setIsScaleActive(false)
                            setIsCustomActive(true)
                        }} />

                </View >

                <View style={styles.card}>
                    <BMI height={130} width={"130%"} preserveAspectRatio="xMinYMin slice" style={{ position: "absolute", top: 0, }} />
                    {isScaleActive &&
                        <>
                            <View style={{ flexDirection: "row", marginTop: 50, justifyContent: "space-between", width: "100%" }}>

                                <AppText >Lose</AppText>
                                <AppText style={{}}>Maintain</AppText>
                                <AppText style={{}}>Gain</AppText>

                            </View>
                            {/* <AppText style={styles.title}>Mid</AppText> */}
                            <View style={{ height: "20%", width: "110%", marginTop: 20 }}>

                                <Slider
                                    value={sliderValue}
                                    style={{ width: "100%", height: 50 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    onValueChange={(value) => {
                                        setSliderValue(value)
                                    }}
                                    step={10}
                                />
                            </View>
                            <AppText style={styles.desc}>Example description Example description Example description Example description</AppText>
                        </>
                    }
                    {isCustomActive &&
                        <>
                            <AppText style={[styles.title, { marginTop: 50 }]}>Set Your Own Daily Value</AppText>
                            <AppTextInput placeholder="1 kg/week" onChangeText={(e) => { setCustomValue(e) }} />

                        </>
                    }
                </View>
                <View style={{ margin: 20, }}>
                    <AppButton title={"Next"} onPress={() => { navigation.navigate("Signup") }} />
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    card: {
        overflow: "hidden",
        width: "90%",
        height: "55%",
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
    desc: {
        fontSize: 16,
        color: colors.dark,
        textAlign: "center",
        marginVertical: 10

    },
    title: {
        fontSize: 25,
        fontWeight: "500",
        color: colors.dark,
        textAlign: "center",
        marginVertical: 10
    }
})
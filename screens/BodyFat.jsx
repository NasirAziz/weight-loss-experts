import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import colors from '../config/colors'
import TopWave1 from '../components/TopWave1'
import BottomWave from '../components/BottomWave'
import AppText from '../components/Text'
import SwitchButton from '../components/SwitchButton'
import AppTextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import AppPicker from '../components/Picker'
import PickerItem from '../components/PickerItem'

export default function BodyFat({ navigation }) {
    const [isMetricActive, setIsMetricActive] = React.useState(true)
    const [isImperialActice, setIsImperialActice] = React.useState(false)
    const [height, setHeight] = React.useState(0)
    const [weight, setWeight] = React.useState(0)
    const [age, setAge] = React.useState(0)
    const [gender, setGender] = React.useState(0)
    return (
        <>
            <TopWave1 />
            <ScrollView style={{ flex: 1, height: "100%", width: "100%", display: "flex" }}>
                <Screen >
                    <View style={styles.container} >

                        <BackButton onPress={() => { navigation.pop() }} />
                        <AppText style={styles.text}>{"START Calculating\nYOUR Body Fat"}</AppText>

                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <SwitchButton isActive={isMetricActive} title="Metric" onPress={() => {
                                setIsMetricActive(true)
                                setIsImperialActice(false)
                            }} style={{ margin: 20 }} />
                            <SwitchButton isActive={isImperialActice} title="Imperial" onPress={() => {
                                setIsMetricActive(false)
                                setIsImperialActice(true)
                            }} style={{ margin: 20 }} />
                        </View>

                        <View>

                            <AppTextInput placeholder={"Gender"} icon="gender-male-female" />
                            <AppTextInput placeholder={isMetricActive ? "Weight (kg)" : "Weight (lbs)"} icon="weight" />
                            <AppTextInput placeholder={isMetricActive ? "Waist Circumference (cm)" : "Waist Circumference (feet)"} icon="human-male-height" />
                            <AppTextInput placeholder={isMetricActive ? "Wirst Circumference (cm)" : "Wirst Circumference (feet)"} icon="human-male-height" />
                            <AppTextInput placeholder={isMetricActive ? "Hip Circumference (cm)" : "Hip Circumference (feet)"} icon="human-male-height" />
                            <AppTextInput placeholder={isMetricActive ? "Forearm Circumference (cm)" : "Forearm Circumference (feet)"} icon="human-male-height" />
                            <TouchableOpacity style={{
                                alignSelf: 'center',
                            }}
                                onPress={() => {
                                    navigation.navigate("BMI")
                                }}
                            >
                                <AppText style={styles.calculate}>Calculate</AppText>
                            </TouchableOpacity>


                        </View>


                    </View>
                </Screen>
            </ScrollView>
            {/* <BottomWave /> */}
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // height: 100,
        // width: 100,
        // display: "flex"
    },
    calculate: {
        fontSize: 22,
        color: "#82D6AE",
        textAlign: 'left',
        marginTop: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
    text: {
        fontSize: 25,
        color: colors.dark,
        textAlign: 'left',
        marginTop: 5,
        textTransform: 'uppercase',
    },
})
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import colors from '../config/colors'
import TopWave1 from '../components/TopWave1'
import BottomWave from '../components/BottomWave'
import AppText from '../components/Text'
import SwitchButton from '../components/SwitchButton'
import AppTextInput from '../components/TextInput'
import BackButton from '../components/BackButton'

export default function BMI({ navigation }) {
    const [isMetricActive, setIsMetricActive] = React.useState(true)
    const [isImperialActice, setIsImperialActice] = React.useState(false)
    const [height, setHeight] = React.useState(0)
    const [weight, setWeight] = React.useState(0)
    return (
        < >
            <TopWave1 />
            <Screen >
                <View style={styles.container} >
                    <BackButton onPress={() => { navigation.pop() }} />
                    <AppText style={styles.text}>{"START Calculating\nYOUR BMI"}</AppText>

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
                        <AppTextInput placeholder={isMetricActive ? "Height (cm)" : "Height (feet)"} icon="human-male-height" />
                        <AppTextInput placeholder={isMetricActive ? "Weight (kg)" : "Weight (lbs)"} icon="weight" />

                    </View>

                    <Pressable style={{
                        position: 'absolute',
                        bottom: 80,
                        alignSelf: 'center',
                    }}
                        onPress={() => { console.log("Pressed"); navigation.navigate('BodyFat') }}
                    >
                        <AppText onPres={() => { console.log("Pressed"); navigation.navigate('BodyFat') }} style={styles.calculate}>Calculate</AppText>
                    </Pressable>

                </View>
            </Screen>
            <BottomWave />
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

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
        marginTop: 20,
        textTransform: 'uppercase',
    },
})
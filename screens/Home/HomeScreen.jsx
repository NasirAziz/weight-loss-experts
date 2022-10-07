import { ScrollView, StyleSheet, View, StatusBar, Pressable } from 'react-native'
import React from 'react'


import AppText from '../../components/Text'
import HomeHeader from '../../components/HomeHeader'
import BMI from "../../assets/bmi-icon.svg"
import BMR from "../../assets/bmr-icon.svg"
import Calories from "../../assets/calories-icon.svg"
import BodyFat from "../../assets/bodyfat-icon.svg"

import Drawer from "../../assets/drawer-icon.svg"
import HomeButton from '../../components/HomeButton'
import HomePlanCard from '../../components/HomePlanCard'
import Screen from '../../components/Screen'
import colors from '../../config/colors'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <ScrollView style={styles.container2}>
                <StatusBar barStyle="dark-content" backgroundColor="#38CF8C" translucent={true} />
                <Screen>
                    <HomeHeader name={"Nasir Aziz"} fat={"22%"} intake={997} burned={545} />
                    <View style={styles.container}>

                        <AppText style={styles.heading}>
                            Your Weekly Diet Plan
                        </AppText>
                        <HomePlanCard image={require("../../assets/food.jpg")} text="Diet Plan" onPress={() => { navigation.navigate("DietPlan") }} />

                        <AppText style={styles.heading}>
                            Your Weekly Exercise Plan
                        </AppText>
                        <HomePlanCard image={require("../../assets/gym-illustration.jpg")} text="Exercise Plan" onPress={() => { navigation.navigate("ExercisePlan") }} />

                        <View style={styles.line}>
                        </View>

                        <AppText style={styles.heading}>
                            Calculate Your
                        </AppText>

                        <View style={styles.buttonRow}>
                            <HomeButton text={"BMI"} icon={<BMI />} onPress={() => { navigation.navigate("BMI") }} />
                            <HomeButton text={"BMR"} icon={<BMR />} onPress={() => { navigation.navigate("BMR") }} />

                        </View>

                        <View style={styles.buttonRow}>
                            <HomeButton text={"Calories"} icon={<Calories />} onPress={() => { navigation.navigate("Calories") }} />
                            <HomeButton text={"Body Fat"} icon={<BodyFat />} onPress={() => { navigation.navigate("BodyFat") }} />
                        </View>

                    </View>
                </Screen>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    heading: {
        marginTop: 25,
        marginLeft: 10,
    }, line: {
        borderBottomColor: colors.dark,
        borderBottomWidth: 1.5,
        marginVertical: 25,
        marginHorizontal: 30,
        opacity: 0.2,

    }

})
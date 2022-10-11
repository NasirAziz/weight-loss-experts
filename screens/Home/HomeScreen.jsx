import { ScrollView, StyleSheet, View, StatusBar, } from 'react-native'
import React, { useContext } from 'react'
import { ApolloClient, InMemoryCache, } from '@apollo/client';


import AppText from '../../components/Text'
import HomeHeader from '../../components/HomeHeader'
import BMI from "../../assets/bmi-icon.svg"
import BMR from "../../assets/bmr-icon.svg"
import Calories from "../../assets/calories-icon.svg"
import BodyFat from "../../assets/bodyfat-icon.svg"

import HomeButton from '../../components/HomeButton'
import HomePlanCard from '../../components/HomePlanCard'
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import useAuth from '../../authentication/useAuth';


const client = new ApolloClient({
    uri: 'https://production.suggestic.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": "Token e4a2aaf2883e9a174b8edd44793dabc657418db0",
        "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
    },
});


export default function HomeScreen({ navigation }) {
    const { user } = useAuth()

    return (
        <View>
            <ScrollView style={styles.container2}>
                <StatusBar barStyle="dark-content" backgroundColor="#38CF8C" translucent={true} />
                <Screen>
                    <HomeHeader name={user.name} fat={"22%"} intake={997} burned={545} />
                    <View style={styles.container}>

                        <AppText style={styles.heading}>
                            Your Weekly Diet Plan
                        </AppText>
                        <HomePlanCard image={require("../../assets/food.jpg")} text="Diet Plan"
                            onPress={() => { navigation.navigate("DietPlan", { sguser: user.user_id }) }} />

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
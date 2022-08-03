import { FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardExercise from '../components/CardExercise'
import TopWave2 from '../components/TopWave2'
import BackButton from '../components/BackButton'
import Screen from '../components/Screen'
import Boy from "../assets/boy-running.svg"
import AppText from '../components/Text'

export default function ExercisePlan() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                width: "100%",
                borderRadius: 38,
                // backgroundColor: "#000",
                // overflow: "hidden",
                alignSelf: "center",
                position: "absolute",
                top: 50,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 20,
                },
                shadowOpacity: 1,
                shadowRadius: 5,
                elevation: 10,
            }} >
                <Boy width="100%" preserveAspectRatio="xMinYMin slice" />
            </View>
            <TopWave2 />

            <View style={{ height: 0 }}></View>
            <Screen>
                <BackButton />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 10, position: "absolute", top: 280, bottom: 0, left: 0, right: 0, }}>
                    <AppText style={{ fontWeight: "bold" }}>Your Exercise Plan</AppText>
                </View>
                <ScrollView style={{ flex: 1, position: "absolute", top: 330, bottom: 0, left: 0, right: 0, }}>

                    <Pressable onPress={() => console.log("Pressed")} activeOpacity={0} style={{
                        marginHorizontal: 20,
                    }}>
                        <CardExercise title={"Beginner"} desc="This is a description of the exercise This is a description of the exercise This is a description of the exercise This is a description of the exercise" />
                    </Pressable>

                    <TouchableOpacity onPress={() => console.log("Pressed")} style={{
                        marginHorizontal: 20,
                    }}>
                        <CardExercise title={"Intermediate"} desc="This is a description of the exercise This is a description of the exercise This is a description of the exercise This is a description of the exercise" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("Pressed")} style={{
                        marginHorizontal: 20,
                    }}>
                        <CardExercise title={"Advance"} desc="This is a description of the exercise This is a description of the exercise This is a description of the exercise This is a description of the exercise" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("Pressed")} style={{
                        marginHorizontal: 20,
                    }}>
                        <CardExercise title={"Expert"} desc="This is a description of the exercise This is a description of the exercise This is a description of the exercise This is a description of the exercise" />
                    </TouchableOpacity>

                </ScrollView>
            </Screen>
            {/*<Screen>
                <View style={{ flex: 1, position: "absolute", top: 280, bottom: 0, left: 0, right: 0, }}>
                    <AppText>asdasdasd</AppText>
                    {/* <ScrollView style={{ height: "200%" }}>
                </View>
            </Screen>
        */}
        </View>
    )
}

const styles = StyleSheet.create({})
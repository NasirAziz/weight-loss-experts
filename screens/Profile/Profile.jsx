import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'


import Screen from '../../components/Screen'
import AppText from '../../components/Text'

export default function Profile({ navigation }) {
    const handleImageChange = () => { }
    return (
        <Screen>
            <ScrollView style={{ backgroundColor: "#f1f1f1", flex: 1 }}>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff", paddingVertical: 30 }}>
                    <TouchableOpacity onPress={handleImageChange}>
                        <Image style={{ width: 180, height: 180, borderRadius: 500 }} source={require("../../assets/food.jpg")} />
                    </TouchableOpacity>
                    <AppText style={{ fontSize: 22, fontWeight: "bold", marginTop: 8 }}>Abdul Haseeb</AppText>
                </View>
                <View style={{ width: "100%", backgroundColor: "#f1f1f1", height: 25 }} />

                <ProfileOptionsItem icon={"account"} text={"Edit Profile"} onPress={() => { navigation.navigate("EditProfile", { name: "Nasir", email: "nasiraziz91@gmail.com" }) }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"star"} text={"Plans"} onPress={() => { }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"cancel"} text={"Food Preferences"} onPress={() => { navigation.navigate("FoodPreferences") }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"bullseye-arrow"} text={"Weight Goals"} onPress={() => { navigation.navigate("WeightGoals") }} />
                {/* <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} /> */}
                <View style={{ width: "100%", backgroundColor: "#f1f1f1", height: 30 }} />


                <ProfileOptionsItem icon={"scale-balance"} text={"Unit Preference"} onPress={() => { }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"bell-badge"} text={"Notifications"} onPress={() => { }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"crosshairs-gps"} text={"Location"} onPress={() => { }} />
                {/* <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} /> */}
                <View style={{ width: "100%", backgroundColor: "#f1f1f1", height: 25 }} />


            </ScrollView>
        </Screen>
    )
}


function ProfileOptionsItem({ icon, text, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View style={{ width: "100%", backgroundColor: "#fff", paddingHorizontal: 20, paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons size={25} name={icon} />
                    <AppText style={{ marginLeft: 20 }}>{text}</AppText>
                </View>
                <MaterialCommunityIcons size={20} name='chevron-right' />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})
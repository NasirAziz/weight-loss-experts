import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { Image, Pressable, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { gql, useMutation, } from '@apollo/client';
import Toast from 'react-native-root-toast';

import Screen from '../../components/Screen'
import AppText from '../../components/Text'
import useAuth from '../../authentication/useAuth';


let imperial = false

export default function Profile({ navigation, route }) {
    const { user, logOut, setAvatar } = useAuth()
    const [image, setImage] = React.useState(user.avatar);

    useEffect(() => {
        if (route.params)
            imperial = route.params.isImperial
    }, [route.params])
    console.log(imperial)

    const handleImageChange = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setAvatar(result.uri)
            setImage(result.uri)
        }

    };


    return (
        <Screen>
            <ScrollView style={{ backgroundColor: "#f1f1f1", flex: 1 }}>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff", paddingVertical: 30 }}>
                    <TouchableOpacity onPress={handleImageChange}>

                        <Image style={{ width: 150, height: 150, borderRadius: 500 }}
                            source={image !== null ? { uri: image } : require("../../assets/blank-profile-picture-640.png")} />

                    </TouchableOpacity>
                    <AppText style={{ fontSize: 22, fontWeight: "bold", marginTop: 8 }}>{user.name}</AppText>
                </View>
                <View style={{ width: "100%", backgroundColor: "#f1f1f1", height: 25 }} />

                <ProfileOptionsItem icon={"account"} text={"Edit Profile"}
                    onPress={() => {
                        navigation.navigate("EditProfile", { name: user.name, email: user.email, sguser: user.user_id })
                    }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"star"} text={"Plans"}
                    onPress={() => { }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"cancel"} text={"Food Preferences"}
                    onPress={() => { navigation.navigate("FoodPreferences", { sguser: user.user_id }) }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"bullseye-arrow"} text={"Weight Goals"}
                    onPress={() => { navigation.navigate("WeightGoals", { sguser: user.user_id }) }} />
                {/* <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} /> */}
                <View style={{ width: "100%", backgroundColor: "#f1f1f1", height: 30 }} />


                <ProfileOptionsItem icon={"scale-balance"} text={"Unit Preference"}
                    onPress={() => { navigation.navigate("UnitPreference", { sguser: user.user_id, isImperial: imperial }) }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"bell-badge"} text={"Notifications"}
                    onPress={() => { }} />
                <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} />

                <ProfileOptionsItem icon={"crosshairs-gps"} text={"Location"}
                    onPress={() => { }} />
                {/* <View style={{ alignSelf: "center", width: "90%", backgroundColor: "#D3D3D3", height: 1 }} /> */}
                <View style={{ width: "100%", backgroundColor: "#f1f1f1", height: 25 }} />

                <ProfileOptionsItem icon={"bell-badge"} text={"Logout"}
                    onPress={() => logOut()} />
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
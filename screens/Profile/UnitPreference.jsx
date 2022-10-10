import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Screen from '../../components/Screen'
import AppText from '../../components/Text'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useMutation, gql } from '@apollo/client'
import AppButton from '../../components/Button'
import BackButton from '../../components/BackButton'


export default function UnitPreference({ navigation, route }) {
    let { sguser, isImperial } = route.params
    const [isImperialS, setIsImperial] = useState(isImperial)

    const [update] = useMutation(gql`
        mutation updateProfile($isImperial:Boolean){
            updateProfile(isImperial:$isImperial) {
                success
                errors {
                    field
                }
            }
        }
    `
        , {
            context: {
                headers: {
                    "sg-user": sguser
                }
            },
            onCompleted: () => navigation.navigate("Profile", { isImperial: isImperialS })
        })

    return (
        <Screen style={{ paddingHorizontal: 10, paddingTop: 60 }}>
            <BackButton onPress={() => navigation.goBack()} style={{ top: 10 }} />
            <UnitItem isActive={isImperialS} units={"lb, in, fl, oz"} unitSystem="Imperial" onPress={() => setIsImperial(true)} />
            <UnitItem isActive={!isImperialS} units={"kg, cm, g, ml"} unitSystem="Metric" onPress={() => setIsImperial(false)} />
            <View style={{ position: "absolute", bottom: 20, right: 10, left: 10 }}>

                <AppButton title={"Save"} onPress={() => {
                    update({ variables: { isImperial: isImperialS } })
                        .catch((err) => console.log(JSON.stringify(err)))
                }} />
            </View>
        </Screen>
    )
}

function UnitItem({ isActive = false, unitSystem, units, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            flexDirection: "row", width: "100%", borderWidth: 2,
            borderRadius: 10,
            borderColor: isActive ? colors.primary : "#d1d1d1",
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 20,
        }}>

            <View>
                <AppText style={{ fontWeight: "bold", marginBottom: 8, fontSize: 20 }}>{unitSystem}</AppText>
                <Text style={{ fontSize: 16 }}>{units}</Text>
            </View>
            <MaterialCommunityIcons size={25}
                name={isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                color={isActive ? colors.primary : "#d1d1d1"}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
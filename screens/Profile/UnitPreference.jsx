import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Screen from '../../components/Screen'
import AppText from '../../components/Text'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ApolloClient, InMemoryCache, useMutation, gql } from '@apollo/client'
import AppButton from '../../components/Button'
import BackButton from '../../components/BackButton'


const client = new ApolloClient({
    uri: 'https://production.suggestic.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": 'Token e4a2aaf2883e9a174b8edd44793dabc657418db0',
        "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
    },
});

export default function UnitPreference({ navigation, route }) {
    const init = route.params ? route.params.isImperial : false
    const [isImperial, setIsImperial] = useState(init)

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
        , { onCompleted: () => navigation.goBack() })
    return (
        <Screen style={{ paddingHorizontal: 10, paddingTop: 60 }}>
            <BackButton onPress={() => navigation.goBack()} style={{ top: 10 }} />
            <UnitItem isActive={isImperial} units={"lb, in, fl, oz"} unitSystem="Imperial" onPress={() => setIsImperial(true)} />
            <UnitItem isActive={!isImperial} units={"kg, cm, g, ml"} unitSystem="Metric" onPress={() => setIsImperial(false)} />
            <View style={{ position: "absolute", bottom: 20, right: 10, left: 10 }}>

                <AppButton title={"Save"} onPress={() => {
                    update({ variables: { isImperial: isImperial } })
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

            <View style={{


            }}>
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
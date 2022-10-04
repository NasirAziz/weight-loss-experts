import { StyleSheet, View } from 'react-native'
import React from 'react'

import AppTextInput from '../../components/TextInput'
import Screen from '../../components/Screen'
import AppText from '../../components/Text'
import AppButton from '../../components/Button'

export default function EditProfile({ route }) {
    let { name, email } = route.params
    return (
        <Screen>
            <View style={{ paddingVertical: 120, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <AppText style={{ fontSize: 30, fontWeight: "bold" }}>Account</AppText>
                <AppTextInput value={name} placeholder="Name" icon="account" />
                <AppTextInput value={email} placeholder="Email" icon="email" />

                <AppText onPress={() => { }} style={{ fontSize: 16, paddingVertical: 10, color: "blue", textDecorationLine: "underline" }}>Change Password</AppText>

                <AppButton title={"Update"} onPress={() => { }} />
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    a: {
        textDecorationLine: "underline"
    }
})
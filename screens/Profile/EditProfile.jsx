import { StyleSheet, View } from 'react-native'
import React from 'react'
import { gql, useMutation } from '@apollo/client';

import AppTextInput from '../../components/TextInput'
import Screen from '../../components/Screen'
import AppText from '../../components/Text'
import AppButton from '../../components/Button'
import BackButton from '../../components/BackButton'

export default function EditProfile({ navigation, route }) {
    let { name, email } = route.params
    const [nameS, setName] = React.useState(name);
    const [emailS, setEmail] = React.useState(email);

    const [update] = useMutation(gql`
            mutation updateProfile($name:String,$email:String){
                updateProfile(name: $name, email: $email) {
                    success
                    errors {
                        field
                    }
                }
            }
            `, {
        onCompleted: (data) => data.updateProfile.success ? navigation.goBack() : console.log(data.updateProfile.errors)
    }
    );
    return (
        <Screen>
            <BackButton onPress={() => navigation.goBack()} style={{ top: 30, left: 20 }} />

            <View style={{ paddingVertical: 120, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <AppText style={{ fontSize: 30, fontWeight: "bold" }}>Account</AppText>
                <AppTextInput onChangeText={(text) => setName(text)} value={nameS} placeholder="Name" icon="account" />
                <AppTextInput onChangeText={(text) => setEmail(text)} value={emailS} placeholder="Email" icon="email" />

                <AppText onPress={() => { }} style={{ fontSize: 16, paddingVertical: 10, color: "blue", textDecorationLine: "underline" }}>Change Password</AppText>

                <AppButton title={"Update"} onPress={() => {
                    update({ variables: { name: nameS, email: emailS } })
                        .catch((err) => {
                            console.log(JSON.stringify(err))
                        })
                }} />
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    a: {
        textDecorationLine: "underline"
    }
})
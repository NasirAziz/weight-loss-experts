import { StyleSheet, View } from 'react-native'
import React from 'react'
import { gql, useMutation } from '@apollo/client';

import AppTextInput from '../../components/TextInput'
import Screen from '../../components/Screen'
import AppText from '../../components/Text'
import AppButton from '../../components/Button'
import BackButton from '../../components/BackButton'
import storage from '../../authentication/storage';
import useAuth from '../../authentication/useAuth';

export default function EditProfile({ navigation, route }) {
    const { user, setUser } = useAuth()
    let { name, email, sguser } = route.params
    const [nameS, setName] = React.useState(name);
    const [emailS, setEmail] = React.useState(email);

    const [update] = useMutation(gql`
            mutation updateProfile($name:String){
                updateProfile(name: $name) {
                    success
                    errors {
                        field
                    }
                }
            }
            `, {
        context: {
            headers: {
                "sg-user": sguser
            }
        },
        onCompleted: (data) => {
            if (data.updateProfile.success) {
                let userUpdated = user
                userUpdated.name = nameS
                storage.storeToken(JSON.stringify(userUpdated))
                setUser(userUpdated)
                navigation.navigate("Profile", { user: userUpdated })//route caused to refresh context on previous screen
            }
            else
                console.log(data.updateProfile.errors)

        }
    }
    );
    return (
        <Screen>
            <BackButton onPress={() => navigation.goBack()} style={{ top: 30, left: 20 }} />

            <View style={{ paddingVertical: 120, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <AppText style={{ fontSize: 30, fontWeight: "bold" }}>Account</AppText>
                <AppTextInput onChangeText={(text) => setName(text)} value={nameS} placeholder="Name" icon="account" />
                <View style={{ opacity: 0.5, padding: 0, margin: 0, width: "100%" }}>
                    <AppTextInput editable={false} onChangeText={(text) => setEmail(text)} value={emailS} placeholder="Email" icon="email" />

                </View>

                <AppText onPress={() => { }} style={{ fontSize: 16, paddingVertical: 10, color: "blue", textDecorationLine: "underline" }}>Change Password</AppText>

                <AppButton title={"Update"} onPress={() => {
                    update({ variables: { name: nameS } })
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
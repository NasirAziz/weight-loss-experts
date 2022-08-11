import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import AppText from "../../components/Text";
import BottomWave from "../../components/BottomWave";
import TopWave1 from "../../components/TopWave1";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

function SignUpScreen({ navigation }) {
    return (
        <>
            <TopWave1 />
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require("../../assets/logo2.png")} />
                <AppText style={styles.title} >Sign Up</AppText>
                <Form
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => navigation.navigate("HomeScreen")}
                    validationSchema={validationSchema}
                >
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="Password"
                        placeholder=" Re-Enter Password"
                        secureTextEntry
                        textContentType="password"
                    />

                    <SubmitButton title="Sign Up" />
                </Form>
                <View style={styles.iconsContainer}>

                    <TouchableOpacity style={styles.icon}>
                        <Image source={require("../../assets/facebook.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} >
                        <Image source={require("../../assets/google.png")} />
                    </TouchableOpacity>

                </View>
            </Screen>

            {/* <BottomWave /> */}

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        width: "100%"
    },
    desc: {
        color: "#A9A9A9",
        fontSize: 12,
        marginBottom: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 20,

    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    logo: {
        width: 180,
        height: 70,
        alignSelf: "center",
        marginTop: 0,
        marginBottom: 20,
    },
    link: {
        fontSize: 12,
        color: "#91C788",
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    signup: {
        color: "#A9A9A9",
        fontSize: 12,
        marginTop: 10,
        textAlign: "center",

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    bottomImage:
    {
        width: "100%",
        position: "absolute",
        bottom: 0,
    }
});

export default SignUpScreen;
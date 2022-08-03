import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import AppText from "../../components/Text";

import BottomWave from "../../components/BottomWave"
import Facebook from "../../assets/facebook.svg"
import Goolge from "../../assets/google.svg"
import Logo from "../../assets/logo2.svg"
import TopWave1 from "../../components/TopWave1";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen() {
    return (
        <>
            <TopWave1 />
            <Screen style={styles.container}>
                <Logo style={styles.logo} />
                <AppText style={styles.title} >Sign in</AppText>
                <Form
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => console.log(values)}
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
                    <AppText style={styles.desc} >Forgot Password? Reset from <AppText style={styles.link} >here</AppText></AppText>

                    <SubmitButton title="Sign in" />
                </Form>
                <AppText style={styles.signup} >Don't have an account? <AppText style={styles.link} >Sign up</AppText></AppText>
                <View style={styles.iconsContainer}>

                    <TouchableOpacity style={styles.icon}>
                        <Facebook height={50} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} >
                        <Goolge height={50} />
                    </TouchableOpacity>

                </View>
            </Screen>
            <BottomWave />


        </>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
    },
    container: {
        padding: 10,
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
        alignSelf: "center",
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
    }
});

export default LoginScreen;

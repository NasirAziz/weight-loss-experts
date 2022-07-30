import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import AppText from "../../components/Text";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <>
            <img style={{ width: "100%" }} src={require("../../assets/TopWave1.svg")} />
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require("../../assets/logo2.svg")} />
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
                        <img src={require("../../assets/facebook.svg")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} >
                        <img src={require("../../assets/google.svg")} />
                    </TouchableOpacity>

                </View>
            </Screen>

            <img style={{ width: "100%" }} src={require("../../assets/BottomWave.svg")} />

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
        marginBottom: "1rem",
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: "2rem",

    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2rem",
    },
    logo: {
        width: 180,
        height: 70,
        alignSelf: "center",
        marginTop: 30,
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
        marginTop: "1rem",
        textAlign: "center",

    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        marginVertical: 10,
        textAlign: "center",
    }
});

export default LoginScreen;

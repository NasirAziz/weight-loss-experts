import React, { Component } from 'react';
import {
    StyleSheet,   // CSS-like styles       // Renders text
    View          // Container component
} from 'react-native';

import Swiper from './Swiper';

import AppText from '../../components/Text';
import colors from '../../config/colors';
export default class Screens extends Component {
    render() {
        return (
            <>
                <img style={{ width: "100%", marginBottom: 10, marginTop: 0 }} src={require("../../assets/TopWave1.svg")} />
                <View style={{ marginBottom: "-50%", flexDirection: 'row', width: "100%" }}>
                    <AppText style={styles.title}>Weight Loss Experts</AppText>
                    <AppText style={styles.link}>Skip</AppText>
                </View>
                <Swiper>
                    {/* First screen */}
                    <View style={[styles.slide]}>
                        <img src={require('../../assets/cuate1.svg')} />
                        <AppText style={styles.header}>Healthy Recipes</AppText>
                        <AppText style={styles.text}>Browse thousands of healthy recipes from all over the world</AppText>
                    </View>
                    {/* Second screen */}
                    <View style={[styles.slide]}>
                        <img src={require('../../assets/cuate2.svg')} />
                        <AppText style={styles.header}>Healthy Recipes</AppText>
                        <AppText style={styles.text}>Browse thousands of healthy recipes from all over the world</AppText>
                    </View>
                    {/* Third screen */}
                    <View style={[styles.slide]}>
                        <img src={require('../../assets/cuate3.svg')} />
                        <AppText style={styles.header}>Track Your Health</AppText>
                        <AppText style={styles.text}>With amazing inbuilt tools you can track your progress</AppText>
                    </View>
                    {/* 4 screen */}
                    <View style={[styles.slide]}>
                        <img src={require('../../assets/cuate3.svg')} />
                        <AppText style={styles.header}>Track Your Health</AppText>
                        <AppText style={styles.text}>With amazing inbuilt tools you can track your progress</AppText>
                    </View>
                </Swiper>
            </>

        );
    }
}

const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: '#000',
        fontSize: 16,
        marginHorizontal: 40,
        textAlign: 'center',
    },
    title: {
        color: colors.primary,
        fontSize: 20,
        width: "100%",
        marginRight: "-15%",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    link: {
        color: colors.primary,
        fontSize: 10,
        marginVertical: "auto"
        // textAlign: "center",
    },
});
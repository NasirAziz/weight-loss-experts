import { Dimensions, Easing, StyleSheet, View, } from 'react-native'
import React from 'react'
import AnimatedNumbers from 'react-native-animated-numbers';

import AppText from './Text'
import colors from '../config/colors';
import defaultStyles from "../config/styles";


export default function ResultCircle({ result, unit, style }) {
    const [animateToNumber, setAnimateToNumber] = React.useState(0);


    const increase = () => {
        setAnimateToNumber(animateToNumber + result);
    };

    return (
        <View style={styles.container}>

            <View style={[style, styles.circle]} onLayout={increase}>
                <AnimatedNumbers
                    animateToNumber={animateToNumber}
                    // easing={Easing.elastic(1.2)}
                    fontStyle={[defaultStyles.text, { color: colors.white, fontSize: 64, fontWeight: 'bold', letterSpacing: 3 }]}
                />
                <AppText style={styles.unit}>
                    {unit}
                </AppText>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        backgroundColor: "#82D6AE",
        borderRadius: 1000,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.45,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        // display: "flex",
    },
    unit: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',

    }
})
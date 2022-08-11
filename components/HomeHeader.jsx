import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Ellipse } from 'react-native-svg';

import Screen from './Screen';
import colors from '../config/colors';
import AppText from './Text';
export default function HomeHeader({ intake, burned, fat, name }) {
    return (
        <View>
            <Svg style={{ flex: 1 }} width="100%" height="300" viewBox="0 0 375 279" xmlns="http://www.w3.org/2000/svg">
                <Ellipse
                    cx="187" cy="-5" rx="389" ry="284" fill="#38CF8C"
                />
                {/* <Screen> */}
                <View style={styles.container}>

                    <AppText style={styles.heading}>
                        Hello {name}
                    </AppText>
                    <AppText style={styles.subGreeting}>
                        Find, track and eat heathy food.
                    </AppText>

                    <View style={styles.row}>

                        <View>
                            <AppText style={styles.text}>
                                IN TAKE
                            </AppText>

                            <AppText style={styles.value}>
                                {intake}
                            </AppText>
                        </View>

                        <View >
                            <AppText style={styles.text}>
                                Burned
                            </AppText>

                            <AppText style={styles.value}>
                                {burned}
                            </AppText>
                        </View>
                    </View>
                    <View style={styles.mainValueContainer}>
                        <AppText style={styles.bodyFat}>
                            Body Fat
                        </AppText>

                        <AppText style={styles.mainValue}>
                            {fat}
                        </AppText>
                    </View>
                </View>
                {/* </Screen> */}
            </Svg>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    heading: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subGreeting: {
        color: colors.white,
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30,

    },
    value: {
        color: colors.light,
        fontSize: 16,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyFat: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',

    },
    mainValue: {
        color: colors.light,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mainValueContainer: {
        position: 'absolute',
        bottom: -40,
        left: 0,
        right: 0,
        // backgroundColor: colors.white,
    }
})
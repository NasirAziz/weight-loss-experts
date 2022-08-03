import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Screen from '../../components/Screen'
import colors from '../../config/colors';
import ResultCircle from '../../components/ResultCircle';
import TopWave1 from '../../components/TopWave1';
import BottomWave from '../../components/BottomWave';
import BackButton from '../../components/BackButton';

export default function Results({ text, result, unit }) {
    return (
        <View>
            <TopWave1 />
            <Screen>
                <BackButton />
                <View style={{ padding: 20, marginBottom: 50 }} >
                    <Text style={styles.text}>{{ text } && "Your Results Suggests That You Are Healthy Weight"}</Text>
                </View>
                <ResultCircle result={{ result } && "23.5%"} unit={{ unit } && "kg/m2"} />
            </Screen>
            <BottomWave />
        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 25,
        color: colors.dark,
        textAlign: 'left',
        marginTop: 20,
        textTransform: 'uppercase',
    }

})
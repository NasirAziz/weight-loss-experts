import { StyleSheet, View, } from 'react-native'
import Svg, { Rect, Defs, Stop, LinearGradient, } from 'react-native-svg'

import colors from '../config/colors'
import AppText from './Text'

export default function CardExercise({ title, desc, onPress }) {
    return (
        // <View style={[styles.container]}>

        <Svg width={"100%"} preserveAspectRatio="xMinYMin slice" onPress={onPress} style={{
            marginVertical: 10, paddingVertical: 10,
        }}>

            <View style={{ width: 80, position: "absolute", right: 15, bottom: 10, backgroundColor: colors.light, borderRadius: 5 }}>
                <View style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }} width={80} height={30}>
                    <AppText style={{ textAlign: "center", color: colors.primary, fontSize: 14 }}>More</AppText>
                </View>
            </View>

            <View>
                <AppText style={styles.title}>{title}</AppText>
            </View>
            <View>
                <AppText style={styles.desc}>{desc}</AppText>
            </View>

            <Rect width="100%" height="100%" rx="16" fill="url(#paint0_linear_473_114)" />
            <Rect width="100%" height="100%" rx="16" fill="url(#paint1_linear_473_114)" />

            <Defs>
                <LinearGradient id="paint0_linear_473_114" x1="12.5" y1="5.72916" x2="108.241" y2="255.377" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#D6FF94" />
                    <Stop offset="1" stopColor="#3DC24B" />
                </LinearGradient>
                <LinearGradient id="paint1_linear_473_114" x1="8" y1="-7.00131e-07" x2="148.636" y2="253.434" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#63F7A1" />
                    <Stop offset="1" stopColor="#51A47F" />
                </LinearGradient>
            </Defs>

        </Svg>

        // </View >
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: "100%",
        // height: "100%",
        // backgroundColor: "red",
        // marginTop: 100
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white,
        marginVertical: 10,
        textAlign: "center"

    },
    desc: {
        fontSize: 16,
        color: colors.white,
        textAlign: "left",
        marginRight: "40%",
        marginLeft: 10,

    }
    // background: linear - gradient(132.9deg, #63F7A1 1.3 %, #51A47F 98.06 %), linear- gradient(143.36deg, #D6FF94 3.66 %, #3DC24B 103.19 %);
})
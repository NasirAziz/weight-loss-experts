import { StyleSheet, View, } from 'react-native'
import Svg, { Rect, Defs, Stop, LinearGradient, Path, G, } from 'react-native-svg'

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
            <G opacity="0.1" clip-path="url(#clip1_294_3184)">
                <Path d="M149.488 101.283C149.526 101.199 149.573 101.12 149.603 101.035C149.733 100.653 149.796 100.255 149.792 99.8437C149.793 99.7458 149.766 99.6537 149.755 99.5573C149.735 99.3539 149.732 99.1538 149.678 98.955C149.642 98.8211 149.568 98.7094 149.519 98.5841C149.491 98.5173 149.5 98.45 149.469 98.3825L130.014 56.6494C129.739 56.061 129.299 55.6343 128.801 55.2875C128.603 54.4195 128.108 53.6304 127.343 53.1178L97.5039 33.0452C97.0971 32.7735 96.6453 32.5877 96.1647 32.4983L27.7552 19.7655C27.2746 19.6761 26.7862 19.6868 26.3089 19.794L-8.75361 27.7868C-9.64814 27.9906 -10.3945 28.5486 -10.8906 29.2838C-11.4766 29.4288 -12.0445 29.6716 -12.513 30.1216L-45.6804 62.0603C-45.733 62.1086 -45.7495 62.1781 -45.7992 62.2305C-45.8903 62.3297 -45.9991 62.4075 -46.0781 62.5198C-46.1998 62.6859 -46.2749 62.8752 -46.3663 63.0542C-46.4078 63.1408 -46.4663 63.2207 -46.5008 63.3086C-46.6546 63.6865 -46.7361 64.0852 -46.7531 64.4885C-46.756 64.5824 -46.7394 64.6689 -46.7347 64.7605C-46.722 65.0823 -46.6681 65.3973 -46.5702 65.7095C-46.5336 65.8252 -46.4958 65.9339 -46.448 66.048C-46.4126 66.1308 -46.4002 66.2202 -46.3578 66.3044L26.1624 203.212C26.1839 203.253 26.2269 203.275 26.2491 203.312C26.4855 203.719 26.7828 204.072 27.1512 204.355C27.2085 204.398 27.2712 204.432 27.3326 204.472C27.7324 204.742 28.1748 204.959 28.666 205.05C29.1571 205.142 29.6479 205.099 30.1181 204.99C30.19 204.975 30.2606 204.966 30.3296 204.946C30.7716 204.814 31.1795 204.593 31.5465 204.298C31.5804 204.272 31.6286 204.266 31.6632 204.236L148.585 102.588C148.654 102.528 148.698 102.446 148.765 102.382C148.85 102.296 148.925 102.205 149 102.11C149.197 101.853 149.361 101.578 149.488 101.283ZM27.1796 26.9142L94.1368 39.3766L117.263 54.9331L89.4047 63.9039L22.7703 51.5015L0.00530547 33.1085L27.1796 26.9142ZM1.32739 112.845L87.341 128.855L30.6116 194.578L1.32739 112.845ZM2.77364 105.855L24.1937 59.0259L85.4746 70.4318L90.5904 122.2L2.77364 105.855ZM-36.3456 62.981L-8.07378 35.7572L17.5277 56.4422L-3.28102 101.937L-36.1764 63.125C-36.2234 63.0655 -36.2938 63.0342 -36.3456 62.981ZM-7.65011 107.821C-7.70816 108.347 -7.67083 108.887 -7.48404 109.405L9.15783 155.859L-30.6824 80.6447L-7.65011 107.821ZM64.559 166.171L96.8036 128.816C97.1641 128.4 97.3899 127.908 97.5286 127.397L128.8 110.328L64.559 166.171ZM97.4769 119.289L92.6384 70.3605L123.848 60.3111L140.432 95.8837C140.364 95.9147 140.287 95.9185 140.218 95.9565L97.4769 119.289Z" fill="white" />
            </G>

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
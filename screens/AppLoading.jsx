import { StyleSheet, View } from 'react-native'
import React from 'react'
import AnimatedLoader from 'react-native-animated-loader';


export default function AppLoading() {
    return (
        <View style={styles.container}>
            <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    lottie: {
        width: 100,
        height: 100
    }
})
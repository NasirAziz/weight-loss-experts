import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'

import AppButton from '../components/Button'
import AppText from '../components/Text'
import TopWave2 from '../components/TopWave2'
import BackButton from '../components/BackButton'
import Screen from '../components/Screen'

export default function ExerciseVideo({ navigation }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={{ flex: 1 }}>

            <TopWave2 />

            <View style={{ height: 0 }}></View>
            <Screen>
                <BackButton onPress={() => navigation.pop()} />
                <View style={styles.container}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <View style={styles.buttons}>
                        <AppButton
                            title={status.isPlaying ? 'Pause' : 'Play'}
                            onPress={() =>
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                        />
                    </View>
                    <View >
                        <AppText style={styles.title}>Description</AppText>
                        <AppText style={styles.desc}>This is a description of the exercise This is a description of the exercise This is a description of the exercise This is a description of the exercise</AppText>
                    </View>
                </View>

            </Screen>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50
    },
    video: {
        alignSelf: 'center',
        width: "100%",
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },
    desc: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
        fontSize: 18,
    },
    title: {
        marginHorizontal: 25,
        fontWeight: 'bold',
        fontSize: 22,


    }
})
import { Dimensions, View } from 'react-native'
import React from 'react'
import Bottom from '../assets/BottomWave.svg';

export default function BottomWave() {
    return (
        <View >
            <Bottom width={Dimensions.get('window').width} height={90} preserveAspectRatio="xMinYMin slice" />
        </View>
    )
}
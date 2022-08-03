import { Dimensions, View, } from 'react-native'
import React from 'react'
import Top from '../assets/topwave1.svg';


export default function TopWave1() {
    return (
        <View >
            <Top width={Dimensions.get('window').width} height={90} preserveAspectRatio="xMinYMin slice" />
        </View>
        //  height = { Dimensions.get('window').height * 0.12 } width = { Dimensions.get('window').width } 

    )
}

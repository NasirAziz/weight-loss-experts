import { Dimensions, View, } from 'react-native'
import Top from '../assets/TopWave2.svg';


export default function TopWave1() {
    return (
        <View >
            <Top width={Dimensions.get('window').width} height={100} preserveAspectRatio="xMinYMin slice" />
        </View>
        //  height = { Dimensions.get('window').height * 0.12 } width = { Dimensions.get('window').width } 

    )
}

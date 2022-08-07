import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text, Dimensions } from "react-native";
import Svg, { Path } from 'react-native-svg';
function Week(props) {
    const name = props.name;
    const lock = props.lock;
    return (
        <View style={styles.container}>
            <View style={styles.maincardview}>
                <Text>{name}</Text>
                <View style={styles.lock}>
                    <Svg
                        height={40}
                        width={40}
                        viewBox="0 0 1440 320"

                    >
                        <Path
                            fill="black"
                            d='M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z'
                        />
                    </Svg>
                </View>
                <View style={styles.angleRight}>
                    <Svg
                        height={40} width={40}  viewBox="0 0 1440 320">  
                        <Path  
                        fill="black"  d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />      
                      </Svg>

                </View>
            </View>
           
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    angleRight:{
        position: "absolute",
        right:-20,
     
        

        

    },
    lock: {

        opacity: 0.5,
        justifyContent: "center",
      

    },
    maincardview: {
        height: 60,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
      

    },
   
});
export default Week;

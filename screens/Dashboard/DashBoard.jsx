import React from "react"
import { StyleSheet, Image, TouchableOpacity, View, Text, ScrollView, Button } from "react-native";
import DietCard from "../../components/DietCard";
function DashBoard() {
return(
    <View>
        <View style={styles.container}>
            </View>
            <View >
            <Text style={styles.text}> Your Weekly Diet Plan</Text>
            <DietCard />
                </View>
    
    </View>
)
}

export default DashBoard;


const styles = StyleSheet.create({ 
    container: {
        backgroundColor: 'red',
        height: "50%",
        width: "100%",  
    },
    text:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: "5%",
       },
});

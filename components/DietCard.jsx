import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text, Dimensions } from "react-native";
import Svg, { Path } from 'react-native-svg';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
function DietCard(props) {
    var radio_props = [
        {label: props.value1, value: props.value1 },
        {label: props.value2, value: props.value12 },
        {label: props.value3, value: props.value3 },

      ];

    return (
        <View style={styles.container}>
            <View style={styles.maincardview}>
            
            <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
            buttonColor={'#2196f3'}
            buttonSize={10}
            buttonOuterSize={20}
            selectedButtonColor={'#2196f3'}
            selectedLabelColor={'#2196f3'}
            labelStyle={{fontSize: 20, marginRight: 10}}
            formHorizontal={false}
            labelHorizontal={true}
            style={{padding: 10}}
            
        />
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
        height: 150,
        width:  "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        marginTop: 10,
        
      

    },
   
});
export default DietCard;

'use strict';
import React, {useState} from "react";
import {  Dimensions,StyleSheet, Image, TouchableOpacity, View, Text,ScrollView,ImageBackground} from "react-native";
import Svg, { Path } from 'react-native-svg';
import Week from "../../components/Week";
import { StatusBar } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DietCard from "../../components/DietCard";

function DietPlanInfo (){

    const [selectedValue, setSelectedValue] = useState("Day1");
    return(
        <View style={styles.Container}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "green" translucent = {true}/>
        <View style={styles.top}> 
        <ImageBackground style={{ width: "100%",height:200 }} source={require("../../assets/women-bmi.png")} >
        <Svg 
            height={200}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}
          >
            <Path
              fill="green"
              d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            />
          </Svg>
          <Text style={styles.text}> Your Diet Plan</Text>
          </ImageBackground>

        </View>
        <View style={{ borderRadius: 4, borderWidth: 0, overflow: "hidden", padding: 0, backgroundColor: "pink",height:50 ,borderColor:"red",margin:30,}}>
        <Picker
                        selectedValue={selectedValue}
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Day1" value="Day1" />
                        <Picker.Item label="Day2" value="Day2" />
                    </Picker>
        </View>
<ScrollView >
        <View style={styles.breakfastPlan}>
            <Text style={styles.breakfastPlanText}>Breakfast plan</Text>
            <DietCard value1="Chai" value2="anda" value3 = "partha"/>
        </View>
        <View style={styles.breakfastPlan}>
            <Text style={styles.breakfastPlanText}>Breakfast plan</Text>
            <DietCard value1="Chai" value2="anda" value3 = "partha"/>
        </View>
        <View style={styles.breakfastPlan}>
            <Text style={styles.breakfastPlanText}>Breakfast plan</Text>
            <DietCard value1="Chai" value2="anda" value3 = "partha"/>
        </View>

       </ScrollView>
      


      </View>
    )
}
const styles = StyleSheet.create({
    topWavy:{
      position: "absolute",
      marginTop:"-10%",
    
  
    },
     Container:{
      flex: 1
     },
     top:{
  
     },
     text:{
      fontSize: 30,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "30%",
      marginLeft: "10%",
      marginRight: "10%",
      fontFamily: "sans-serif-condensed"
  
     },
     Box:{
      backgroundColor: 'green',
      height: 80,
     },
     overlay: {
      flex: 1,
      position:"absolute",
      left: 0,
      top: 80,
      width: "100%",
      height: "100%",
      backgroundColor: 'white',
      width: "100%",
      opacity:1,
     
    },
    weeks:{
      marginTop: 50,
      
    },
    breakfastPlanText:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginTop: "10%",
        marginLeft: "5%",
        marginRight: "10%",
        fontFamily: "sans-serif-condensed"

    },
    breakfastPlan:{
      marginLeft: "5%",
        marginRight: "5%",
       
     
        
      

    },
  
    });

export default DietPlanInfo;
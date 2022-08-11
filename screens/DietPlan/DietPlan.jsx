'use strict';
import React from "react";
import { Dimensions, StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native";
import Svg, { Path } from 'react-native-svg';
import Week from "../../components/Week";
import { StatusBar } from 'react-native'
import BackButton from "../../components/BackButton";
function DietPlan({ navigation }) {

  return (

    <View style={styles.Container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="green" translucent={true} />
      <View style={styles.top}>
        <ImageBackground style={{ width: "100%", height: 200 }} source={require("../../assets/women-bmi.png")} >
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

        <BackButton />
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.weeks}>
          <Week name="Week 1" lock={false} />

          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 2" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 3" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 4" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 5" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 6" lock={false} />
          <View style={{ width: 50, height: 10 }} ></View>
          <Week name="Week 7" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 8" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 9" lock={false} />
          <View style={{ width: 50, height: 10 }}></View>
          <Week name="Week 10" lock={false} />



        </View>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  topWavy: {
    position: "absolute",
    marginTop: "-10%",


  },
  Container: {
    flex: 1
  },
  top: {

  },
  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "30%",
    marginLeft: "10%",
    marginRight: "10%",
    fontFamily: "sans-serif-condensed"

  },
  Box: {
    backgroundColor: 'green',
    height: 80,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 80,
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
    width: "100%",
    opacity: 1,
  },
  weeks: {
    marginTop: 50,

  }
});
export default DietPlan;
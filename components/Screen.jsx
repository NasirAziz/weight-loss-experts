import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, KeyboardAvoidingView, ScrollView } from "react-native";

function Screen({ children, style }) {

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   enabled={true}
    //   style={styles.container}
    // >
    // <ScrollView>
    <SafeAreaView style={[styles.screen, style,]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
    // {/* </ScrollView> */}
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;

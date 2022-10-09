import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import AppText from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Card({ title, subTitle, image, onPress, isUserFav = false }) {
  // const [isFav, setIsFav] = useState(true)
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} ellipsizeMode={"tail"} numberOfLines={2}>
          {title}
        </Text>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
        <Pressable onPress={onPress}
          style={{ position: "absolute", right: 20, bottom: 20 }}>
          <MaterialCommunityIcons name="heart" size={24} color={isUserFav ? "red" : "grey"} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
    overflow: "hidden",
    height: 210,
    width: 300,
    elevation: 10,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    zIndex: 10
  },
  image: {
    width: "100%",
    height: 120,
    marginBottom: -20,
    zIndex: 5
  },
  subTitle: {
    color: "grey",
    fontSize: 14,
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",

  },
});

export default Card;

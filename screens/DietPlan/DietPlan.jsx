
import { useMutation, useQuery } from "@apollo/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, } from "react-native";
import GENERATE_MEAL_PLAN from "../../Backend/Suggestic/Mutaions/generateMealPlan";
import GET_USER_MEAL_PLAN from "../../Backend/Suggestic/Queries/getUserMealPlan";
import BackButton from "../../components/BackButton";
import Screen from "../../components/Screen";
import AppText from "../../components/Text";
import colors from "../../config/colors";
import AppLoading from "../AppLoading";
import DietPlanDayItem from "./DietPlanDayItem";




// value.toISOString("YYYY-MM-DD").split('T')[0]
function DietPlan({ navigation, route }) {
  let { sguser } = route.params
  const todayDate = new Date().toISOString("YYYY-MM-DD").split('T')[0];
  const [mealData, setMealData] = useState()
  const [dataReady, setDataReady] = useState(false)
  const { loading, error, data } = useQuery(GET_USER_MEAL_PLAN, { context: { headers: { "sg-user": sguser } }, fetchPolicy: "network-only" })
  const [update] = useMutation(GENERATE_MEAL_PLAN,
    {
      variables: { includeFavorites: true, ignoreLock: false },
      context: { headers: { "sg-user": sguser } }
    })
  // console.log(loading, error, data)
  useEffect(() => {
    if (!loading)
      if (data.mealPlan.length <= 0 || data.mealPlan[0].date == todayDate) {// TODO double check this condition and make it better 
        update().then((data) => {
          setMealData(data.generateMealPlan.mealPlan)
          setDataReady(true)
        })
      } else {
        setMealData(data.mealPlan)
        setDataReady(true)
      }
  }, [loading])


  if (!dataReady) return <AppLoading />
  return (
    <Screen style={{ backgroundColor: colors.light }} >
      <View style={{ flexDirection: "row", backgroundColor: colors.white, justifyContent: "space-between", alignItems: "center", padding: 25 }}>
        <BackButton style={{ position: "relative", top: 5, left: 0 }} onPress={() => navigation.goBack()} />
        <AppText style={{ fontSize: 22 }}>Your This Week's Diet</AppText>
        <MaterialCommunityIcons style={{}} name="shopping" size={30} color={colors.dodgerblue}
          onPress={() => navigation.navigate("ShoppingList", { sguser: sguser })} />
      </View>
      <ScrollView >
        <View style={styles.scroll}>

          {mealData.map((mealDay, index) => <DietPlanDayItem
            key={mealDay.id}
            navigation={navigation}
            mealPlan={mealDay}
            isToday={mealDay.date == todayDate} />)}
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flexDirection: "column-reverse",
    padding: 10
  },

});
export default DietPlan;
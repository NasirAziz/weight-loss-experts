import React, { useEffect, useState } from 'react'
import { StyleSheet, Switch, Text, View, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery, useMutation, resetCaches, RefetchQueriesFunction } from '@apollo/client';

import AppLoading from '../AppLoading';
import colors from '../../config/colors';
import Screen from '../../components/Screen';
import AppText from '../../components/Text';
import AppButton from "../../components/Button"
import defaultStyles from "../../config/styles";
import AppPicker from '../../components/Picker';
import BackButton from '../../components/BackButton';
import GET_USER_PROFILE from '../../Backend/Suggestic/Queries/getUserProfile';
import PROFILE_MACRO_GOALS_SETTINGS from '../../Backend/Suggestic/Mutaions/profileMacroGoalsSettings';

const listOfGenders = [{ label: "MALE", value: "MALE" }, { label: "FEMALE", value: "FEMALE" }]
const listOfActivityLevels = [
    { label: "No Activity", value: "NOT_ACTIVE" },
    { label: "Exercise 1-2 times per week", value: "EXERCISE_1" },
    { label: "Exercise 3+ times per week", value: "EXERCISE_2" },
    // { label: "Exercise 1-2 times per week", value: "EXERCISE_1" }
]

const listOfWeightGoals = [
    { label: "lose/gain 0.5 kg per week", value: "GOAL_1" },
    { label: "lose/gain (1 kg) per week", value: "GOAL_2" },
    { label: "lose/gain (1.5 kg) per week", value: "GOAL_3" },
    { label: "lose/gain (4 kg) per week", value: "GOAL_4" }
]
let selectGoalsOn = true
let selectedSex = "";
let selectedBirthday = "";
let selectedHeight = "";
let selectedWeightGoal = "";
let selectedActivityLevel = "";
let selectedCurrentWeight = "";
let selectedTargetWeight = "";


export default function WeightGoals({ navigation, route }) {
    let { sguser } = route.params

    const { loading, error, data, } = useQuery(GET_USER_PROFILE, {
        fetchPolicy: "network-only",
        context: {
            headers: {
                "sg-user": sguser
            }
        },
    })


    const [isPickerShow, setIsPickerShow] = useState(false);
    const [isImperial, setIsImperial] = useState(false);
    const [height, setHeight] = useState(0);
    const [currentWeight, setCurrentWeight] = useState(10);
    const [targetWeight, setTargetWeight] = useState(10);
    // const [isImperial, setIsImperial] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));//Date.now()
    // console.log(data)
    const [isGoalsOn, setIsGoalsOn] = useState(false);

    useEffect(() => {
        if (data) {

            setIsImperial(data.myProfile.isImperial)
            setIsGoalsOn(data.myProfile.goalsOn)
            setDate(new Date(data.myProfile.birthdate))
            selectedSex = data.myProfile.biologicalSex
            selectGoalsOn = data.myProfile.goalsOn
            selectedBirthday = data.myProfile.birthdate
            selectedWeightGoal = data.myProfile.weeklyWeightGoal
            selectedActivityLevel = data.myProfile.activityLevel

            selectedHeight = data.myProfile.height
            selectedTargetWeight = data.myProfile.targetWeight
            selectedCurrentWeight = data.myProfile.startingWeight
            if (data.myProfile.isImperial) {
                selectedHeight = (parseFloat(selectedHeight) * 3.281).toFixed(0)
                selectedCurrentWeight = (parseFloat(selectedCurrentWeight) * 2.205).toFixed(0)
                selectedTargetWeight = (parseFloat(selectedTargetWeight) * 2.205).toFixed(0)

                setHeight(selectedHeight) //convert meter to feet
                setTargetWeight(selectedTargetWeight)//convert incoming kg to pounds
                setCurrentWeight(selectedCurrentWeight)//convert incoming kg to pounds
                console.log(selectedHeight, height, selectedCurrentWeight, currentWeight)


            } else {
                selectedHeight = (parseFloat(selectedHeight) * 100).toFixed(0)
                selectedCurrentWeight = (parseFloat(selectedCurrentWeight)).toFixed(0)
                selectedTargetWeight = (parseFloat(selectedTargetWeight)).toFixed(0)

                setHeight(selectedHeight) //convert meter to cm
                setTargetWeight(selectedTargetWeight)
                setCurrentWeight(selectedCurrentWeight)

                console.log(selectedHeight, height, selectedCurrentWeight, currentWeight)

            }
            // console.log(data)


        }
    }, [data])

    const [update] = useMutation(PROFILE_MACRO_GOALS_SETTINGS,
        {
            context: {
                headers: {
                    "sg-user": sguser
                }
            },
            // refetchQueries: [
            //     { query: GET_USER_PROFILE }
            // ],
            onCompleted: (data) => {
                if (data.profileMacroGoalsSettings.success) {
                    navigation.goBack()
                }
            }
        })

    if (error) return <AppText>{error.message}</AppText>
    if (loading) return <AppLoading />

    const toggleSwitch = () => {

        setIsGoalsOn(previousState => !previousState)
        selectGoalsOn = !selectGoalsOn

    };

    const onDateChange = (event, value) => {
        selectedBirthday = value.toISOString("YYYY-MM-DD").split('T')[0]

        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };
    return (
        <Screen style={{}}>
            {!loading ? <BackButton onPress={() => navigation.goBack()} style={{ position: "relative", marginTop: 40, marginStart: 5 }} /> : null}

            <View style={{
                backgroundColor: colors.light,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 15
            }}>
                <AppText style={{ fontSize: 20, fontWeight: "bold" }}>On/Off</AppText>
                <Switch
                    trackColor={{ false: '#767577', true: colors.primary }}
                    thumbColor={isGoalsOn ? '#fff' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isGoalsOn}
                    //Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. 
                    //Test and measure when using this property
                    shouldRasterizeIOS={true}
                />
            </View>
            <ScrollView>

                <View style={{ flex: 1, opacity: !isGoalsOn ? 0.5 : 1 }} pointerEvents={!isGoalsOn ? "none" : null}>
                    <AppText style={{ fontSize: 16, color: colors.black, marginStart: 15, marginVertical: 10, }}>Personal Info</AppText>

                    <TouchableWithoutFeedback onPress={() => setIsPickerShow(true)}>
                        <View style={[styles.container, { width: "100%", display: "flex" }]}>

                            <MaterialCommunityIcons
                                name={'calendar'}
                                size={20}
                                color={colors.medium}
                                style={styles.icon}
                            />

                            <Text style={styles.placeholder}>{"Your Birthdate"}</Text>
                            <Text style={styles.text}>{date.toISOString("YYYY-MM-DD").split('T')[0]}</Text>

                            <MaterialCommunityIcons
                                name="chevron-down"
                                size={20}
                                color={colors.medium}
                            />

                        </View>
                    </TouchableWithoutFeedback>
                    {isPickerShow && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={false}

                            onChange={onDateChange}
                            style={styles.datePicker}
                        />
                    )}
                    <BioSexPicker initialValue={data && selectedSex} data={data} />

                    <View style={[styles.container2]}>
                        <MaterialCommunityIcons
                            name={"human-male-height"}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />

                        <TextInput
                            value={height.toString()}

                            keyboardType='numeric'
                            placeholderTextColor={colors.medium}
                            placeholder={isImperial ? "Height (feet)" : "Height (cm)"}
                            style={[defaultStyles.text, { width: "80%", fontSize: 16, }]}
                            onChangeText={(text) => {
                                setHeight(text)
                                selectedHeight = text
                            }}
                        />
                    </View>


                    <AppText style={{ fontSize: 16, color: colors.black, marginStart: 15, marginVertical: 10, }}>Goal Details</AppText>


                    <View style={[styles.container2]}>
                        <MaterialCommunityIcons
                            name={"weight"}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />

                        <TextInput
                            value={currentWeight.toString()}

                            keyboardType='numeric'
                            placeholderTextColor={colors.medium}
                            placeholder={!isImperial ? "Current Weight (kg)" : "Current Weight (lbs)"}
                            style={[defaultStyles.text, { width: "80%", fontSize: 16 }]}
                            onChangeText={(text) => {
                                setCurrentWeight(text)
                                selectedCurrentWeight = text
                            }}
                        />
                    </View>

                    <View style={[styles.container2]}>
                        <MaterialCommunityIcons
                            name={"target"}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />

                        <TextInput
                            value={targetWeight.toString()}
                            keyboardType='numeric'
                            placeholderTextColor={colors.medium}
                            placeholder={!isImperial ? "Target Weight (kg)" : "Target Weight (lbs)"}
                            style={[defaultStyles.text, { width: "80%", fontSize: 16 }]}
                            onChangeText={(text) => {
                                setTargetWeight(text)
                                selectedTargetWeight = text
                            }}
                        />
                    </View>

                    <ActivityLevelPicker initialValue={data && selectedActivityLevel} />
                    <WeightGoalPicker initialValue={data && selectedWeightGoal} />


                </View>
            </ScrollView>

            <View style={{ bottom: 0, padding: 10 }}>

                <AppButton title={"Save"} onPress={() => {
                    update({
                        variables: {
                            isImperial: isImperial,

                            goalsOn: selectGoalsOn,
                            biologicalSex: selectedSex,
                            birthdate: selectedBirthday,
                            weeklyWeightGoal: selectedWeightGoal,
                            activityLevel: selectedActivityLevel,

                            height: isImperial ? parseInt((selectedHeight * 30.48).toFixed(0)) : parseInt(selectedHeight),
                            startingWeight: isImperial ? parseInt((selectedCurrentWeight / 2.205).toFixed(0)) : parseInt(selectedCurrentWeight),
                            targetWeight: isImperial ? parseInt((selectedTargetWeight / 2.205).toFixed(0)) : parseInt(selectedTargetWeight),
                        }
                    }).catch((err) => {
                        console.log(JSON.stringify(err, null, 2))
                    })
                }} />
            </View>
        </Screen>
    )
}


function BioSexPicker({ initialValue, data }) {
    let index = 0;
    const [selection, setSelection] = useState(listOfGenders[index]);
    useEffect(() => {
        if (initialValue) {
            index = initialValue === "FEMALE" ? 1 : 0
            setSelection(listOfGenders[index])
        }
    }, [initialValue])

    return (
        <AppPicker
            items={listOfGenders}
            selectedItem={selection}
            icon={"gender-male-female"}
            placeholder={"Biological Sex"}
            onSelectItem={item => {
                selectedSex = item.value
                setSelection(item)
            }} />
    )
}

function ActivityLevelPicker({ initialValue }) {
    let index = 0
    const [selection, setSelection] = useState(listOfActivityLevels[index]);
    useEffect(() => {
        if (initialValue) {
            index = initialValue === "EXERCISE_1" ? 1 : initialValue === "EXERCISE_2" ? 2 : 0

            setSelection(listOfActivityLevels[index])
        }
    }, [initialValue])

    return (
        <AppPicker
            items={listOfActivityLevels}
            selectedItem={selection}
            icon={"google-fit"}
            placeholder={"Activity Level"}
            onSelectItem={item => {
                selectedActivityLevel = item.value
                setSelection(item)
            }} />
    )
}

function WeightGoalPicker({ initialValue }) {
    let index = 0

    const [selection, setSelection] = useState(listOfWeightGoals[index]);
    useEffect(() => {
        if (initialValue) {
            index = initialValue === "GOAL_1" ? 0 : initialValue === "GOAL_2" ? 1 : initialValue === "GOAL_3" ? 2 : 3

            setSelection(listOfWeightGoals[index])
        }
    }, [initialValue])

    return (
        <AppPicker
            items={listOfWeightGoals}
            placeholder={"Weight Goals"}
            icon={"weight-lifter"}
            selectedItem={selection}
            onSelectItem={item => {
                selectedWeightGoal = item.value
                setSelection(item)
            }} />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 5,
        flexDirection: "row",
        padding: 15,
        marginVertical: 2,
    },
    container2: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 5,
        flexDirection: "row",
        padding: 15,
        marginVertical: 2,
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
        fontSize: 16

    },
    text: {
        flex: 1,
        textAlign: "right",
        marginEnd: 10,
        fontSize: 16,


    },
})
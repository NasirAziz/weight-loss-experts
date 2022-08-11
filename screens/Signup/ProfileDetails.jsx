import React, { useState } from "react";
import { StyleSheet, View, ScrollView, } from "react-native";
import * as Yup from "yup";
import { Picker } from '@react-native-picker/picker';
import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import DateTimePicker from '@react-native-community/datetimepicker';


import AppText from "../../components/Text";
import colors from "../../config/colors";
import TopWave1 from "../../components/TopWave1";

// const validationSchema = Yup.object().shape({
//     name: Yup.string().required().label("Name"),
//     age: Yup.string().required().min(2).label("Age"),
//     gender: Yup.string().required().label("Gender"),
//     weight: Yup.string().required().min(2).label("Weight"),
//     height: Yup.string().required().min(2).label("Height")

// });
const data = ["Male", "Female", "not to tell"];
const heightUnits = ["cm", "ft"]; const weightUnits = ["kg", "lbs"];
function ProfileDetails({ navigation }) {
    const config = {
        fontSize: 18,
        backgroundColor: '#fafafa',
        textColor: 'black',
        selectedBackgroundColor: 'white',
        selectedTextColor: 'black',
        selectedFontWeight: 'bold',
        fontWeight: 'normal',
        borderColor: 'white',
        borderWidth: 1,
        width: '50%',

    }
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const [selectedValue, setSelectedValue] = useState("");
    const [weightUnit, setWeightUnit] = useState(true);
    const [heightUnit, setHeightUnit] = useState(true);

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };
    return (
        <ScrollView>

            <TopWave1 />
            <View style={styles.container}>
                <AppText style={styles.title} >Profile Details</AppText>
                <Form
                    initialValues={{ name: "", age: 0, gender: "", weight: 0, height: 0 }}
                    onSubmit={(values) => { console.log("Pressed"); navigation.navigate("Activity") }}
                // validationSchema={validationSchema}
                >
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="name"
                        placeholder="Enter Your Name"
                        textContentType="emailAddress"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        name="age"
                        placeholder="Age"

                    />
                    <View style={{ borderRadius: 5, borderWidth: 1, padding: 4, backgroundColor: colors.light, height: 60, }}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </View>


                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    name="Date of Birth"
                                    disabled={false}
                                    placeholder="Birthday"
                                    onPressOut={showPicker}
                                    showSoftInputOnFocus={false}
                                    value={date.toDateString()}

                                />
                            </View>
                        </View>
                    </View>

                    {isPickerShow && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChange}
                            style={styles.datePicker}
                        />
                    )}
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    name="weight"
                                    placeholder="Weight"

                                />
                            </View>
                            <View style={{ flex: 0.5, paddingLeft: 10, paddingTop: 10 }}>
                                <View style={{ borderRadius: 5, borderWidth: 1, padding: 4, backgroundColor: colors.light, height: 60, }}>
                                    <Picker
                                        selectedValue={weightUnit}

                                        onValueChange={(itemValue, itemIndex) => setWeightUnit(itemValue)}
                                    >
                                        <Picker.Item label="kg" value="kg" />
                                        <Picker.Item label="lbs" value="lbs" />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 2 }}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    name="height"
                                    placeholder="Height"

                                />
                            </View>
                            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                <View style={{ borderRadius: 5, borderWidth: 1, padding: 4, backgroundColor: colors.light, height: 60, }}>
                                    <Picker
                                        selectedValue={heightUnit}

                                        onValueChange={(itemValue, itemIndex) => setHeightUnit(itemValue)}
                                    >
                                        <Picker.Item label="cm" value="cm" />
                                        <Picker.Item label="ft" value="ft" />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <SubmitButton title="Next" />
                </Form>

            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%"
    },
    desc: {
        color: "#A9A9A9",
        fontSize: 12,
        marginBottom: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 20,
        marginBottom: 40,

    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    logo: {
        width: 180,
        height: 70,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    link: {
        fontSize: 12,
        color: "#91C788",
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    signup: {
        color: "#A9A9A9",
        fontSize: 12,
        marginTop: 10,
        textAlign: "center",

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    bottomImage:
    {
        width: "100%",
        bottom: 0,
    },
    select: {
        width: "50%",
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        marginTop: 5,
    },


});

export default ProfileDetails;
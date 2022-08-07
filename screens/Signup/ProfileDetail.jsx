import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text, ScrollView, Button } from "react-native";
import * as Yup from "yup";
import { Picker } from '@react-native-picker/picker';
import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import DateTimePicker from '@react-native-community/datetimepicker';


import AppText from "../../components/Text";
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    age: Yup.string().required().min(2).label("age"),
    gender: Yup.string().required().label("gender"),
    weight: Yup.string().required().min(2).label("Weight")

});
const data = ["Male", "Female", "not to tell"
];
const heightUnits = ["cm", "ft"]; const weightUnits = ["kg", "lbs"];
function SignUpScreen() {
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

    const [selectedValue, setSelectedValue] = useState("java");
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

            <Image style={{ width: "100%" }} source={require("../../assets/topwave1.png")} />
            <View style={styles.container}>
                <AppText style={styles.title} >Profile Details</AppText>
                <Form
                    initialValues={{ name: "", age: 0, gender: "", weight: 0 }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="name"
                        placeholder="Enter your name"
                        textContentType="emailAddress"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        name="age"
                        placeholder="age"

                    />
                   <View style={{ borderRadius: 4, borderWidth: 0, overflow: "hidden", padding: 0, backgroundColor: "pink",height:50 ,borderColor:"red"}}> 
                   <Picker
                        selectedValue={selectedValue}
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Male" value="java" />
                        <Picker.Item label="Female" value="js" />
                    </Picker>
                   </View>
                    
                
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    name="weight"
                                    disabled={true}
                                    placeholder="Birthday"
                                    onPressOut={showPicker}
                                    showSoftInputOnFocus={false}

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
                            <View style={{ flex: 0.5, padding: 10 }}>
                            <View style={{ borderRadius: 4, borderWidth: 0, overflow: "hidden", padding: 0, backgroundColor: "pink",height:50 ,borderColor:"red",marginTop:5}}> 
                   <Picker
                        selectedValue={selectedValue}
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="KG" value="java" />
                        <Picker.Item label="LBL" value="js" />
                    </Picker>
                   </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    name="height"
                                    placeholder="Height"

                                />
                            </View>
                            <View style={{ flex: 0.5, padding: 10 }}>
                            <View style={{ borderRadius: 4, borderWidth: 0, overflow: "hidden", padding: 0, backgroundColor: "pink",height:50 ,borderColor:"red",marginTop:5}}> 
                   <Picker
                        selectedValue={selectedValue}
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="CM" value="java" />
                        <Picker.Item label="FT" value="js" />
                    </Picker>
                   </View>
                            </View>
                        </View>
                    </View>
                    <SubmitButton title="Next" />
                </Form>
              
            </View>

            {/* <Image style={styles.bottomImage} source={require("../../assets/bottomwave.png")} /> */}
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

export default SignUpScreen;
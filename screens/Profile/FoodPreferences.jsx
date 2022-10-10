import { StyleSheet, Text, View, Switch, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import Accordion from 'react-native-collapsible/Accordion';


import AppText from '../../components/Text';
import AppButton from "../../components/Button"
import Screen from '../../components/Screen';
import GET_ALL_RESTRICTIONS from '../../Backend/Suggestic/Queries/getAllRestrictions';
import GET_USER_RESTRICTIONS from '../../Backend/Suggestic/Queries/getUserRestrictions';
import UPDATE_USER_RESTRICTIONS from "../../Backend/Suggestic/Mutaions/updateUserRestrictions"
import colors from '../../config/colors';
import AppLoading from '../AppLoading';
import BackButton from '../../components/BackButton'
import AuthContext from '../../authentication/context';


let ListOfRestrictionsToSend = []
let ListLength = -1

export default function FoodPreferences({ navigation }) {
    const { user } = useContext(AuthContext)

    const userRest = useQuery(GET_USER_RESTRICTIONS, { context: { headers: { "sg-user": user.user_id } } }).data
    const [activeSections, setActiveSections] = useState([])
    const [changedSettings, setChangedSettings] = useState(false)
    const [update] = useMutation(UPDATE_USER_RESTRICTIONS, {
        variables: { var: ListOfRestrictionsToSend },
        onCompleted: (data) => {
            if (data.profileRestrictionsUpdate.success)
                navigation.goBack()
        }, context: { headers: { "sg-user": user.user_id } }
    })
    const { loading, error, data } = useQuery(GET_ALL_RESTRICTIONS, { context: { headers: { "sg-user": user.user_id } } })

    useEffect(() => {
        if (userRest !== undefined) {
            userRest.myProfile.restrictions.forEach((res) => ListOfRestrictionsToSend.push(res.id))
            ListLength = ListOfRestrictionsToSend.length
        }
    }, [userRest]);


    if (loading) return <AppLoading />

    const renderHeader = (section) => {
        // console.log(section)
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section}</Text>
            </View>
        );
    };

    const renderContent = (section, content, index) => {
        let arr = [];
        const updateState = changed => {
            setChangedSettings(changed)
        }

        arr = data.restrictions.edges.map((edge) => {
            if (edge.node.subcategory === section)
                return <PreferenceItem key={edge.node.name} updateState={updateState} name={edge.node.name} id={edge.node.id} isActive={ListOfRestrictionsToSend.includes(edge.node.id)} />
        })


        return arr
    };

    const updateSections = (indexes) => {

        setActiveSections(indexes);
    };

    return (
        <Screen>
            <BackButton onPress={() => navigation.goBack()} style={{ top: 30, left: 20 }} />

            <ScrollView style={styles.mainView}>

                <Accordion
                    activeSections={activeSections}
                    sections={["Most Common", "General", "Animal Origin", "Cereals and Grains", "Fruits and Vegetables", "Herbs and Spices", "Nuts and Seeds"]}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    onChange={updateSections}
                    duration={2500}
                    sectionContainerStyle={{ fontSize: 250 }}
                    containerStyle={{ fontSize: 250 }}
                    underlayColor={"#f4f4f4"}

                />
            </ScrollView>

            {changedSettings && <View style={{ padding: 20, backgroundColor: colors.light }}>
                <AppButton title={"Save"} onPress={() => {
                    update()
                }} />
            </View>}
            {/* </TouchableHighlight> */}
        </Screen>
    )
}





function PreferenceItem({ name, id, isActive = false, updateState }) {
    useEffect(() => {
        if (ListLength !== -1 && ListLength !== ListOfRestrictionsToSend.length)
            updateState(true)
        else
            updateState(false)
    });



    const [isEnabled, setIsEnabled] = useState(isActive);
    const toggleSwitch = () => {
        if (!isEnabled)
            ListOfRestrictionsToSend.push(id)
        else {
            const index = ListOfRestrictionsToSend.indexOf(id)
            ListOfRestrictionsToSend.splice(index, 1)
        }
        setIsEnabled(previousState => !previousState)

    };

    return (<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <AppText >{name}</AppText>
        <Switch
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>)
}

const styles = StyleSheet.create({
    header: {
        padding: 14,
        backgroundColor: "#fff",
        marginTop: 5
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    mainView: {
        backgroundColor: colors.light,
        marginTop: 80
    }
})
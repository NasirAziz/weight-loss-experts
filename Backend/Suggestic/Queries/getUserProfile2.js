import { gql } from '@apollo/client'

const GET_USER_PROFILE2 = gql`
    query {
        myProfile {
            id
            age
            birthdate
            biologicalSex
            activityLevel
            startingWeight
            targetWeight
            height
            weeklyWeightGoal
            goalsOn
            isImperial
            language
        }
    }
`;


export default GET_USER_PROFILE2;

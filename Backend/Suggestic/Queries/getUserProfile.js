import { gql } from '@apollo/client'

const GET_USER_PROFILE = gql`
    query {
        myProfile {
            id
            age
            birthdate
            biologicalSex
            activityLevel
            startingWeight
            customAttributes
            targetWeight
            height
            weeklyWeightGoal
            goalsOn
            isImperial
            programName
            language
            restrictions {
                id
                name
                isOnProgram
                subcategory
                slugname 
            }
            dailyCaloricIntakeGoal
            caloricDifference
            totalDailyEnergyExpenditure
            basalMetabolicRate
            program {
                databaseId
                name
                author
            }
            mealPlan {
                id
                day
                date
            meals {
                recipe {
                    id
                    name
                }
                meal
                calories
            }
        }
    }
}

`;


export default GET_USER_PROFILE;

import { gql } from '@apollo/client'

const GET_USER_PROFILE = gql`
    query {
        myProfile {
            id
            age
            email
            height
            userId
            goalsOn
            language
            isImperial
            programName
            biologicalSex
            customAttributes
            caloricDifference
            basalMetabolicRate
            dailyCaloricIntakeGoal
            totalDailyEnergyExpenditure
        }
    }

`;


// {
//   myProfile {
//         id
//         age
//         birthdate
//         biologicalSex
//         activityLevel
//         startingWeight
//         customAttributes
//         targetWeight
//         height
//         weeklyWeightGoal
//         goalsOn
//         isImperial
//         programName
//         language
//     restrictions {
//             name
//         }
//         dailyCaloricIntakeGoal
//         caloricDifference
//         totalDailyEnergyExpenditure
//         basalMetabolicRate
//     program {
//             databaseId
//             name
//             author
//         }
//     mealPlan {
//             id
//             day
//             date
//       meals {
//         recipe {
//                     id
//                     name
//                 }
//                 meal
//                 calories
//             }
//         }
//     }
// }



export default GET_USER_PROFILE;

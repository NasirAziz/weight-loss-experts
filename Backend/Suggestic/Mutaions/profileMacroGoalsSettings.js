
import { gql } from '@apollo/client'

const PROFILE_MACRO_GOALS_SETTINGS = gql`
    mutation profileMacroGoalsSettings (
      $goalsOn: Boolean
      $biologicalSex: BiologicalSex
      $birthdate: Date
      $height: Float
      $startingWeight: Float      
      $targetWeight: Float
      $weeklyWeightGoal: WeeklyWeightGoal
      $activityLevel: ActivityLevel
    ){
      profileMacroGoalsSettings(
      goalsOn: $goalsOn
      biologicalSex: $biologicalSex
      birthdate: $birthdate
      height: $height
      startingWeight: $startingWeight      
      targetWeight: $targetWeight
      weeklyWeightGoal: $weeklyWeightGoal
      activityLevel: $activityLevel
        ){
            success
            bmr 
            tdee 
            cd
            dcig 
        }
    }
  `;

//https://docs.suggestic.com/graphql/query/mutations/user-profile/update-users-goals
export default PROFILE_MACRO_GOALS_SETTINGS;

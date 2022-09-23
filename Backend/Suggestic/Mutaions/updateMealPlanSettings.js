
import { gql } from '@apollo/client'

const UPDATE_PROFILE_MEAL_PLAN_SETTINGS = gql`
    mutation updateMealPlanSettings  (
      $calories: int
      $carbs: int
      $fat: int
      $omega3: int
      $protein: int      
    
    ){
      updateMealPlanSettings (
      calories: $calories
      carbs: $carbs
      fat: $fat
      omega3: $omega3
      protein: $protein
        ){
            success
            message
        }
    }
  `;

//https://docs.suggestic.com/graphql/query/mutations/user-profile/update-meal-plan-settings
export default UPDATE_PROFILE_MEAL_PLAN_SETTINGS;

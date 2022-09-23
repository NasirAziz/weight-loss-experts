
import { gql } from '@apollo/client'

const SWAPE_MEAL_PLAN_RECIPE = gql`
    mutation swapMealPlanRecipe  (
      $recipeId: String
      $mealId: String    
    
    ){
      swapMealPlanRecipe (
      recipeId: $recipeId
      mealId: $mealId

        ){
            success
        }
    }
  `;

//https://docs.suggestic.com/graphql/query/mutations/meal-plan/swap-meals
export default SWAPE_MEAL_PLAN_RECIPE;

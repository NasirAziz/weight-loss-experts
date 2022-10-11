import { gql } from '@apollo/client'

const GET_USER_MEAL_PLAN = gql`
    query{
  mealPlan {
    day
    id
    calories
    date(useDatetime: false)
    calories
    meals {
      id
      calories
      meal
      numOfServings
      recipe {
        id
         databaseId
        totalTime
        totalTimeInSeconds
        name
        rating
        numberOfServings
        ingredientLines
        adherenceDetails{
          score
          color
          isRecommended
          title
        }
        ingredients {
          name
        }
        source {
          siteUrl
          displayName
          recipeUrl
        }
        mainImage
        isPremium
        isFeatured
        author
        authorAvatar
        ingredientsCount
        favoritesCount
        isUserFavorite
        inUserShoppingList
        weightInGrams
        servingWeight
        isLogged
        relativeCalories {
          carbs
          fat
          protein
          fat
        }
        instructions
        nutritionalInfo {
          calories
          protein
          carbs
          fat
          sugar
          fiber
          saturatedFat
          monounsaturatedFat
          polyunsaturatedFat
          transFat
          cholesterol
          sodium
          potassium
          vitaminA
          vitaminC
          calcium
          iron
          netcarbs
        }
      }
    }
  }
}
`;


export default GET_USER_MEAL_PLAN;

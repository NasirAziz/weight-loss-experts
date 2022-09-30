import { gql } from "@apollo/client";

const RECIPE_SEARCH = gql`
  query searchRecipeByNameOrIngredient($query: String) {
    searchRecipeByNameOrIngredient(query: $query) {
      onPlan {
         databaseId
          totalTime
          totalTimeInSeconds
          name
          rating
          adherenceDetails{
            score
            color
            isRecommended
            title
        }
          numberOfServings
          ingredientLines
          ingredients {
            name
          }
          language
          courses
          cuisines
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
      otherResults {
         databaseId
          totalTime
          totalTimeInSeconds
          name
          rating
          adherenceDetails{
            score
            color
            isRecommended
            title
        }
          numberOfServings
          ingredientLines
          ingredients {
            name
          }
          language
          courses
          cuisines
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
`;

//https://docs.suggestic.com/graphql/query/search/recipe-search/recipes

export default RECIPE_SEARCH;
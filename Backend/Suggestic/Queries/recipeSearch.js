import { gql } from "@apollo/client";

const RECIPE_SEARCH = gql`
  query recipeSearch($query: String, $mealTime: RecipeMealTime, $dietaryTag: DietaryTag) {
    recipeSearch(query: $query, mealTime: $mealTime, dietaryTag: $dietaryTag) {
      edges {
        node {
         databaseId
          totalTime
          totalTimeInSeconds
          name
          rating
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
  }
`;

//https://docs.suggestic.com/graphql/query/search/recipe-search/recipes

export default RECIPE_SEARCH;
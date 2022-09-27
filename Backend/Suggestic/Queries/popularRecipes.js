import { gql } from "@apollo/client";

const POPULAR_RECIPES = gql`
  query {
  popularRecipes {
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

export default POPULAR_RECIPES;
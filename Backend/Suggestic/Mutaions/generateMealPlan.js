
import { gql } from '@apollo/client'

const GENERATE_MEAL_PLAN = gql`
    mutation generateMealPlan  (
      $includeFavorites: Boolean!
      $ignoreLock: Boolean!
    ){
      generateMealPlan (
      includeFavorites: $includeFavorites
      ignoreLock: $ignoreLock
        ){
            success
            message
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
    }
  `;



// const client = new ApolloClient({
//   uri: 'https://production.suggestic.com/graphql',
//   cache: new InMemoryCache(),
//   headers: {
//     "Authorization": 'Token e4a2aaf2883e9a174b8edd44793dabc657418db0',
//     "sg-user": "37b9ff2a-49bf-441c-ab1b-16b753d15bcc"
//   },
// });

// client.mutate({
//   variables: { includeFavorites: true, ignoreLock: true, maxNumOfServings: 4, breakfastDistribution: 0.2, lunchDistribution: 0.3, dinnerDistribution: 0.3, snackDistribution: 0.2 },
//   mutation: GENERATE_MEAL_PLAN,
// })
//   .then(result => { console.log(result) })
//   .catch(error => { console.log(error.message) });

//https://docs.suggestic.com/graphql/query/mutations/meal-plan/generate-meal-plan
export default GENERATE_MEAL_PLAN;

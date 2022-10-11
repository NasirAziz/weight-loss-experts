import { gql } from "@apollo/client";

const SHOPPING_LIST = gql`
  query {
    shoppingList {
      edges {
        node {
          unit
          isDone
          comment
          quantity
          recipeId
          aisleName
          ingredient
          recipeName
          databaseId
          floatQuantity
          recipeServings
          ingredientLine
          numberOfServings
        }
      }
    }
  }
`;

export default SHOPPING_LIST;
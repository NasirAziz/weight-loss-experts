import { gql } from "@apollo/client";

const ADD_TO_SHOPPING_LIST = gql`
  mutation addToShoppingList($recipeId: String!) {
    addToShoppingList(recipeId: $recipeId) {
      success
      message
    }
  }
`;

export default ADD_TO_SHOPPING_LIST;
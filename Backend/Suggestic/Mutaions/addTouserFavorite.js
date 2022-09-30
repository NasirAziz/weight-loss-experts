import { gql } from "@apollo/client";

const ADD_TO_USER_FAVORITE = gql`
  mutation userFavoriteRecipe($recipeId: String!) {
    userFavoriteRecipe(recipeId: $recipeId) {
      success
      isUserFavorite
    }
  }
`;

export default ADD_TO_USER_FAVORITE;
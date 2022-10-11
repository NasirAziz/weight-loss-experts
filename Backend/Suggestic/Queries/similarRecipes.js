import { gql } from "@apollo/client";

export default SIMILAR_RECIPES = gql`
query similarMacrosRecipes($recipeId:String){
  similarMacrosRecipes(
    recipeId: $recipeId
    size: 15
  ) {
    id
    name
    serving
    mainImage
    numberOfServings
    adherenceDetails{
      score
    }
  	nutrientsPerServing {
      calories
      carbs
      fat
      protein
    }
  }
}
`
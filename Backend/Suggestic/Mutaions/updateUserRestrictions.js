import { gql } from "@apollo/client";

const UPDATE_USER_RESTRICTIONS = gql`
mutation profileRestrictionsUpdate($var:[ID]){  
    profileRestrictionsUpdate(
  		replace:false
    	restrictions: $var) {
    	success
  		}
		}
`;

export default UPDATE_USER_RESTRICTIONS;
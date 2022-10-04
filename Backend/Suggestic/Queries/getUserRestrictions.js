import { gql } from '@apollo/client'

const GET_USER_RESTRICTIONS = gql`
    query {
        myProfile {
            id
            restrictions {
                id
                name
                isOnProgram
                subcategory
                slugname 
            }
            program {
                databaseId
                name
                author
            }
        }
    }
`;


export default GET_USER_RESTRICTIONS;

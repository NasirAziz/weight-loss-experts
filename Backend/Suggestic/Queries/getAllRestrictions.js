import { gql } from '@apollo/client'

const GET_ALL_RESTRICTIONS = gql`
query {
    restrictions {
        edges {
            node {
                id
                name
                subcategory
                slugname
                isOnProgram
            }
        }
    }
}

`;


export default GET_ALL_RESTRICTIONS;

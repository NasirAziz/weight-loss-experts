import { gql } from '@apollo/client'

const CREATE_USER_MUTATION = gql`
    mutation createUser (
      $name: String
      $email: String
      $emailPasswordNotification: Boolean
      $phone: String
      $password: String
    ){
      createUser(
        name:$name
        email:$email
        emailPasswordNotification:$emailPasswordNotification
        phone: $phone
        password: $password
        ){
          success
          message
          user {
            id
            databaseId
            email
            name
            phone
            isActive
            createdAt
            updatedAt
          }
        }
    }
  `;

/* databaseId is sg-user id that can be used in header authorizations */


// const [createUserM] = useMutation(CREATE_USER_MUTATION, {
//     variables: { name: "Nasir", email: "nasiraziz08@gmail.com", emailPasswordNotification: true },
//     // to observe what the mutation response returns
//     onCompleted: data => {
//         console.log(data);
//     }
// });

//     createUserM()

export default CREATE_USER_MUTATION;

import { gql } from '@apollo/client'

const CREATE_PROFILE_CUSTOM_ATTRIBUTES = gql`
    mutation createProfileCustomAttributes (
      $attributes: [        
        name: String
        dataType: AttrDataType!
        value: GenericScalar!
        category: String
        timestamp: Float
    ]
    ){
      createProfileCustomAttributes(
        attributes: [$attributes]
        ){
          success
          errors {
            field
            messages
            }
          }
        }
    }
  `;

/* 

      {
        name: "BMI",
        dataType: STRING,
        value: "0.0"
        category: "Generic"
        timestamp: 507482179.234
      },
      {
        name: "BMR",
        dataType: STRING,
        value: "0.0"
        category: "Generic"
        timestamp: 507482179.234
      },
      {
        name: "Body Fat",
        dataType: STRING,
        value: "0.0"
        category: "Generic"
        timestamp: 507482179.234
      },

*/


// const [createUserM] = useMutation(CREATE_PROFILE_CUSTOM_ATTRIBUTES, {
//     variables: { name: "Nasir", email: "nasiraziz08@gmail.com", emailPasswordNotification: true },
//     // to observe what the mutation response returns
//     onCompleted: data => {
//         console.log(data);
//     }
// });

//     createUserM()

export default CREATE_PROFILE_CUSTOM_ATTRIBUTES;

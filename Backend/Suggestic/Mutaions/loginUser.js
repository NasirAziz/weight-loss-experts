import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($userId: String!) {
    login(userId: $userId) {
        accessToken
        refreshToken
    }
  }
`;


// const [loginUserM] = useMutation(LOGIN_USER, {
//   variables: { userId: "37b9ff2a-49bf-441c-ab1b-16b753d15bcc" },
//   // to observe what the mutation response returns
//   onCompleted: data => {
//     console.log(data);
//   },
//   onError: err => {
//     console.log(err.message);
//   }
// });

// loginUserM()
export default LOGIN_USER;
import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutaion login($userId: String) {
    login(userId: $userId) {
        accessToken
        refreshToken
    }
  }
`;

export default LOGIN_USER;
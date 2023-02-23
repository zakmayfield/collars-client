import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        username
        email
        type
      }
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $username: String!
    $type: String!
  ) {
    signUp(
      name: $name
      email: $email
      password: $password
      username: $username
      type: $type
    ) {
      user {
        id
        name
        email
        type
      }
      token
    }
  }
`;

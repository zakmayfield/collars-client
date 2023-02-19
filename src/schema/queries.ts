import { gql } from '@apollo/client';

export const BREEDS = gql`
  query GetBreeds {
    getBreeds {
      id
      breed
      species
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      name
      username
      email
      type
      profile {
        id
        bio
      }
      pets {
        id
        name
        species
        breed {
          breed {
            id
            breed
          }
        }
      }
      savedPets {
        pet {
          id
          name
          species
          breed {
            breed {
              id
              breed
            }
          }
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        email
        username
      }
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation Signup(
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

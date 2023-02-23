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



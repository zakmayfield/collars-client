/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum AccountType {
  Agency = 'AGENCY',
  Default = 'DEFAULT',
  Volunteer = 'VOLUNTEER'
}

export type Address = {
  __typename?: 'Address';
  address: Scalars['String'];
  apartment?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['String'];
  state: Scalars['String'];
  userProfile?: Maybe<UserProfile>;
  volunteer?: Maybe<Array<Maybe<Volunteer>>>;
  zip: Scalars['Int'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<AuthUser>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Breed = {
  __typename?: 'Breed';
  breed: Scalars['String'];
  id: Scalars['String'];
  pets?: Maybe<Array<Maybe<BreedsToPets>>>;
  species: Species;
};

export type BreedsToPets = {
  __typename?: 'BreedsToPets';
  breed?: Maybe<Breed>;
  pet?: Maybe<Pet>;
};

export enum Coat {
  Long = 'LONG',
  Medium = 'MEDIUM',
  None = 'NONE',
  Short = 'SHORT',
  Unknown = 'UNKNOWN'
}

export enum Color {
  Black = 'BLACK',
  Brindle = 'BRINDLE',
  Brown = 'BROWN',
  Golden = 'GOLDEN',
  Spotted = 'SPOTTED',
  Unknown = 'UNKNOWN',
  White = 'WHITE'
}

export type Contact = {
  __typename?: 'Contact';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  userProfile?: Maybe<UserProfile>;
};

export enum Diet {
  Medical = 'MEDICAL',
  Standard = 'STANDARD',
  Weight = 'WEIGHT'
}

export enum GoodWith {
  All = 'ALL',
  Cats = 'CATS',
  CatsAndDogs = 'CATS_AND_DOGS',
  Children = 'CHILDREN',
  Dogs = 'DOGS',
  Unknown = 'UNKNOWN'
}

export type Image = {
  __typename?: 'Image';
  file?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  pets?: Maybe<Array<Maybe<ImagesToPetProfiles>>>;
  thumbnail?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagesToPetProfiles = {
  __typename?: 'ImagesToPetProfiles';
  image?: Maybe<Image>;
  petProfile?: Maybe<PetProfile>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBreedToPet?: Maybe<Pet>;
  deletePet?: Maybe<Pet>;
  deleteUserAccount?: Maybe<User>;
  login?: Maybe<AuthPayload>;
  postPet?: Maybe<Pet>;
  savePet?: Maybe<Pet>;
  signUp?: Maybe<AuthPayload>;
  updatePet?: Maybe<Pet>;
  updateUserAccount?: Maybe<User>;
};


export type MutationAddBreedToPetArgs = {
  breedId: Scalars['String'];
  petId: Scalars['String'];
};


export type MutationDeletePetArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserAccountArgs = {
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostPetArgs = {
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  species: Species;
};


export type MutationSavePetArgs = {
  petId: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  type: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePetArgs = {
  id: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Species>;
};


export type MutationUpdateUserAccountArgs = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export enum Personality {
  Active = 'ACTIVE',
  Curious = 'CURIOUS',
  Goofy = 'GOOFY',
  Hyper = 'HYPER',
  Lazy = 'LAZY',
  Loner = 'LONER',
  Unknown = 'UNKNOWN'
}

export type Pet = {
  __typename?: 'Pet';
  agency?: Maybe<User>;
  breed?: Maybe<Array<Maybe<BreedsToPets>>>;
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  profile?: Maybe<PetProfile>;
  savedBy?: Maybe<Array<Maybe<UsersToPets>>>;
  species: Species;
};

export type PetProfile = {
  __typename?: 'PetProfile';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  coat?: Maybe<Coat>;
  color?: Maybe<Color>;
  diet?: Maybe<Diet>;
  goodWith?: Maybe<GoodWith>;
  id: Scalars['String'];
  images?: Maybe<Array<Maybe<ImagesToPetProfiles>>>;
  isAdopted: Scalars['Boolean'];
  isAvailable: Scalars['Boolean'];
  isFixed?: Maybe<Scalars['Boolean']>;
  isHouseTrained?: Maybe<Scalars['Boolean']>;
  isVaccineCurrent?: Maybe<Scalars['Boolean']>;
  personality?: Maybe<Personality>;
  pet?: Maybe<Pet>;
  sex?: Maybe<Sex>;
  weight?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getBreeds: Array<Breed>;
  getUser: User;
  petFeed: Array<Maybe<Pet>>;
};


export type QueryGetBreedsArgs = {
  filterNeedle?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryPetFeedArgs = {
  filterNeedle?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN'
}

export enum Species {
  Barnyard = 'BARNYARD',
  Bird = 'BIRD',
  Cat = 'CAT',
  Dog = 'DOG',
  Fish = 'FISH',
  Horse = 'HORSE',
  Reptile = 'REPTILE'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  pets?: Maybe<Array<Maybe<Pet>>>;
  profile?: Maybe<UserProfile>;
  savedPets?: Maybe<Array<Maybe<UsersToPets>>>;
  type: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  volunteers?: Maybe<Array<Maybe<Volunteer>>>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<Array<Maybe<Address>>>;
  bio?: Maybe<Scalars['String']>;
  contact?: Maybe<Array<Maybe<Contact>>>;
  id: Scalars['String'];
  user?: Maybe<User>;
};

export type UsersToPets = {
  __typename?: 'UsersToPets';
  pet?: Maybe<Pet>;
  user?: Maybe<User>;
};

export type Volunteer = {
  __typename?: 'Volunteer';
  address?: Maybe<Address>;
  agency?: Maybe<User>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GetBreedsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBreedsQuery = { __typename?: 'Query', getBreeds: Array<{ __typename?: 'Breed', id: string, breed: string, species: Species }> };


export const GetBreedsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBreeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBreeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"species"}}]}}]}}]} as unknown as DocumentNode<GetBreedsQuery, GetBreedsQueryVariables>;
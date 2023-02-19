import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export interface LoginArgs {
  email: string;
  password: string;
}

export interface SignUpArgs {
  name: string;
  username?: string;
  email: string;
  password: string;
}

export type AuthContext = {
  login: ({ email, password }: LoginArgs) => Promise<AuthContextReturn>;
  signUp: ({ name, username, email, password }: SignUpArgs) => Promise<AuthContextReturn>;
  createApolloClient: () => ApolloClient<NormalizedCacheObject>;
  // getAuth: () => Promise<{}>;
};

export type AuthContextReturn = {
  user: User;
  token: string;
};

export type User = {
  id: string;
  name: string;
  username?: string;
  email: string;
  type: string;
}

export type AuthHeaders = {
  authorization: string;
};

export type DashboardProps = {
  user: User;
};

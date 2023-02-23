import {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { LOGIN, SIGN_UP } from '@/schema';
import { LoginArgs, AuthContext, SignUpArgs } from '@/types';

const authContext = createContext<AuthContext>(null!);

function useProvideAuth() {
  const [authToken, setAuthToken] = useState('');
  const secret = process.env.NEXTAUTH_SECRET ?? '';

  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = window.localStorage.getItem('token');

    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));

    return forward(operation);
  });

  function createApolloClient(): ApolloClient<NormalizedCacheObject> {
    const httpLink = new HttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'include',
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, path }) =>
          console.log(`[GraphQL error] ::: ${message} ::: ${path}`)
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    return new ApolloClient({
      // link: authMiddleware.concat(errorLink).concat(httpLink),
      link: from([errorLink, authMiddleware, httpLink]),
      cache: new InMemoryCache(),
      name: 'collars-client-v3',
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    });
  }

  async function login({ email, password }: LoginArgs) {
    const client = createApolloClient();

    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: { email, password },
    });

    if (data?.login?.token) {
      const { token, user } = data.login;

      setAuthToken(token);

      window.localStorage.setItem('token', token);

      const { login } = data;

      console.log('login :::', login);

      return login;
    }
  }

  async function signUp({ name, username, email, password }: SignUpArgs) {
    const client = createApolloClient();

    const { data } = await client.mutate({
      mutation: SIGN_UP,
      variables: {
        name,
        email,
        ...(username && { username }),
        password,
      },
    });

    if (data?.signUp?.token) {
      const { token, user } = data.signUp;

      setAuthToken(token);

      const { signUp } = data;

      console.log('signUp :::', signUp);

      return signUp;
    }
  }

  // useEffect(() => {
  //   // console.log('hitting isAuth hook');
  //   // if (authToken) {
  //   //   try {
  //   //     console.log('try :: pre verify');
  //   //     const verifiedToken = jwt.verify(authToken, secret);
  //   //     console.log('verfied token', verifiedToken);
  //   //   } catch (err) {
  //   //     console.log('error ::: useAuth', err);
  //   //   }

  //   // if (!verifiedToken) {
  //   //   localStorage.removeItem('token');
  //   // }

  //   // if (verifiedToken) {
  //   //   console.log('verified token :::', verifiedToken);
  //   //   setIsAuth(true);
  //   // }

  //   async function verifyToken() {
  //     try {
  //       let decoded;

  //       if (authToken) {
  //         console.log('authToken', authToken);

  //         decoded = verify(
  //           authToken,
  //           secret,
  //         );

  //         console.log('decoded :::', decoded);

  //         return decoded;
  //       }
  //     } catch (err) {
  //       console.log('error', err);
  //       return null;
  //     }
  //   }

  //   if (authToken) {
  //     verifyToken();
  //   }

  //   setIsAuth(false);
  // }, [authToken, secret]);

  return {
    createApolloClient,
    login,
    signUp,
  };
}

export function AuthProvider({ children }: PropsWithChildren) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

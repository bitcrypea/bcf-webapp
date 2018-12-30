import { compose, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
// import { onError } from 'apollo-link-error';
// import { RetryLink } from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import { authTokenFromStorage } from './redux/tokens';

const env = runtimeEnv();

const apiLink = new HttpLink({ uri: env.REACT_APP_GRAPHQL_ENDPOINT });

// add the authorization to the headers
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = authTokenFromStorage();

  if (token !== null) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return forward(operation);
  }
  operation.setContext({
    headers: {},
  });
  return forward(operation);
});

const link = ApolloLink.from([authMiddleware, apiLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: object => object.key || null,
  }),
});

export default client;

export { compose, graphql, gql };

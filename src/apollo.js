import { compose, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
// import { onError } from 'apollo-link-error';
// import { RetryLink } from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

const apiLink = new HttpLink({ uri: env.REACT_APP_GRAPHQL_ENDPOINT });

// const retryLink = new RetryLink({
//   delay: {
//     initial: 300,
//     max: Infinity,
//     jitter: true,
//   },
//   attempts: {
//     max: 5,
//     retryIf: error => !!error,
//   },
// });

// // TODO: send these to Raven
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.forEach(({ message, locations, path }) => {
//       debugger;
//       //   if (process.env.NODE_ENV === 'staging') {
//       //     console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
//       //   } else if (process.env.NODE_ENV === 'production' ) {
//       //     // Raven.captureException(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
//       //   }
//     });
//   }
//   if (networkError) {
//     if (networkError.statusCode === 401) {
//       debugger;
//       //   removeTokenFromStorage();
//       // location.reload();
//     }
//     // if (process.env.NODE_ENV === 'staging') {
//     //   console.error(`[Network error]: ${networkError}`);
//     // } else if (process.env.NODE_ENV === 'production') {
//     //   // Raven.captureException(networkError);
//     // }
//   }
// });

// // add the authorization to the headers
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // const token = authTokenFromStorage();
//   // console.log('TOKEN', token);
//   // if (token !== null) {
//   //   operation.setContext({
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   });
//   //   return forward(operation);
//   // }
// });

// const loggerMiddleware = new ApolloLink((operation, forward) => {
//   if (
//     process.env.NODE_ENV !== 'production' &&
//     process.env.NODE_ENV !== 'staging'
//   ) {
//     // console.log(operation.operationName);
//   }
//   return forward(operation).map(result => {
//     if (
//       process.env.NODE_ENV !== 'production' &&
//       process.env.NODE_ENV !== 'staging'
//     ) {
//       // console.log(`received result from ${operation.operationName}`);
//     }
//     return result;
//   });
// });

const link = ApolloLink.from([
  // loggerMiddleware,
  // errorLink,
  // retryLink,
  // authMiddleware,
  apiLink,
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: object => object.key || null,
  }),
});

export default client;

export { compose, graphql, gql };

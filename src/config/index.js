let config = {
  graphqlEndpoint: 'https://api-stag.bitcrypea.com/graphql',
};

if (process.env.NODE_ENV === 'production') {
  config.graphqlEndpoint = 'https://api.bitcrypea.com/graphql';
}

export default config;

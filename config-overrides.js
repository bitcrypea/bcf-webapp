const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  ); // change importing css to less
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#6D89EA' },
  })(config, env);
  return config;
};

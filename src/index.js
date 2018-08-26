import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import apolloClient from './apollo';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();

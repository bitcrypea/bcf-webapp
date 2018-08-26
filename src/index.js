import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import apolloClient from './apollo';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ApolloProvider } from 'react-apollo';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history, persistor } from './redux/store';
import apolloClient from './apollo';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div>
            <App />
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();

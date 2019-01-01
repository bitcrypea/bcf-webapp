import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: function(error) {
    console.log(error);
  }
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form'],
  transforms: [encryptor]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(persistedReducer),
  initialState,
  composedEnhancers
);

export const persistor = persistStore(store);

export default store;

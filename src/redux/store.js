import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers';

const history = createHistory();
const middleWares = [thunk, promise(), routerMiddleware(history)].filter(
  Boolean
);

const enhancer = composeWithDevTools(applyMiddleware(...middleWares));
const store = createStore(reducers, enhancer);

export default store;
export { history };

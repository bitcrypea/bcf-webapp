import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth/reducers';
import home from './home/reducers';

export default combineReducers({
  home,
  auth,
  routing: routerReducer,
  form: formReducer,
});

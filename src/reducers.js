import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import simpleReducer from './redux/reducers/simpleReducer';
import auth from './redux/reducers/authReducer';

export default combineReducers({
  simpleReducer,
  auth,
  routing: routerReducer,
  form: formReducer,
});

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import simpleReducer from './redux/reducers/simpleReducer';

export default combineReducers({
  simpleReducer,
  routing: routerReducer,
  form: formReducer,
});

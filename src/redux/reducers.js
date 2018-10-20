import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth/reducers';
import home from './home/reducers';
import pusherReducer from './pusher/reducers';

export default combineReducers({
  home,
  auth,
  pusherReducer,
  routing: routerReducer,
  form: formReducer,
});

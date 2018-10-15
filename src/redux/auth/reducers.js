import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER } from './types';

const getInitialState = () => ({
  isLoggedIn: false,
  token: null,
  expire_at: null,
  user: null,
  error: null,
});

function auth(state = getInitialState(), { type, payload }) {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        ...payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
        ...payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: payload,
      };
    case LOGOUT:
      return getInitialState();
    default:
      return state;
  }
}

export default auth;

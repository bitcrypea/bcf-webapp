import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER } from '../types';

export const loginSuccess = auth => ({
  type: LOGIN_SUCCESS,
  payload: auth,
});

export const loginError = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = auth => ({
  type: REGISTER,
  payload: auth,
});

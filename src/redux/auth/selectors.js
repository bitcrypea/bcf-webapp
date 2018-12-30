import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const isLoggedIn = createSelector(
  authSelector,
  state => state.isLoggedIn
);

export const getUser = createSelector(authSelector, state => state.user);

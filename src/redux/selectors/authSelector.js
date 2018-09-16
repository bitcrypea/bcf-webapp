import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const isLoggedIn = createSelector(
  authSelector,
  state => state.isLoggedIn
);

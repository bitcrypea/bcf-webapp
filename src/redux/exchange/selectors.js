import { createSelector } from 'reselect';

const exchangeSelector = state => state.exchange;

export const getLoadingStatus = createSelector(
  exchangeSelector,
  state => state.isLoading
);

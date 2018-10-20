import { createSelector } from 'reselect';

const pusherSelector = state => state.pusherReducer;

export const getNewReferral = createSelector(
  pusherSelector,
  state => state.newReferral
);

export const getAffiliateCode = createSelector(
  pusherSelector,
  state => state.resultCreateAffiliateCode
);

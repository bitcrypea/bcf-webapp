import { createSelector } from 'reselect';

const pusherSelector = state => state.pusher;

export const getNewReferral = createSelector(
  pusherSelector,
  state => state.newReferral
);

export const getAffiliateCode = createSelector(
  pusherSelector,
  state => state.resultCreateAffiliateCode
);

export const getLoading = createSelector(
  pusherSelector,
  state => state.loading
);

export const getAddress = createSelector(
  pusherSelector,
  state => state.address
)

export const getPusher = createSelector(pusherSelector, state => state.pusher);

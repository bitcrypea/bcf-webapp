import { createSelector } from 'reselect';

const homeSelector = state => state.home;

export const getCartETHBTC = createSelector(
  homeSelector,
  state => state.cartETHBTC
);

export const getCartBTCUSDT = createSelector(
  homeSelector,
  state => state.cartBTCUSDT
);

export const getCartETCBTC = createSelector(
  homeSelector,
  state => state.cartETCBTC
);

export const getCartADABTC = createSelector(
  homeSelector,
  state => state.cartADABTC
);

export const getCartXRPBTC = createSelector(
  homeSelector,
  state => state.cartXRPBTC
);

export const getCartBCCBTC = createSelector(
  homeSelector,
  state => state.cartBCCBTC
);

export const getCoinHOTETH = createSelector(
  homeSelector,
  state => state.coinHOTETH
);

export const getCoinNASETH = createSelector(
  homeSelector,
  state => state.coinNASETH
);

export const getCoinETCETH = createSelector(
  homeSelector,
  state => state.coinETCETH
);

export const getCoinVETETH = createSelector(
  homeSelector,
  state => state.coinVETETH
);

export const getCoinADAETH = createSelector(
  homeSelector,
  state => state.coinADAETH
);

export const getCoinXRPETH = createSelector(
  homeSelector,
  state => state.coinXRPETH
);

export const getCoinEOSETH = createSelector(
  homeSelector,
  state => state.coinEOSETH
);

export const getCoinTRXETH = createSelector(
  homeSelector,
  state => state.coinTRXETH
);

export const getCoinZILETH = createSelector(
  homeSelector,
  state => state.coinZILETH
);

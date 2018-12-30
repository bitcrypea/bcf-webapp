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

export const getCoinETCBTC = createSelector(
  homeSelector,
  state => state.coinETCBTC
);

export const getCoinETHBTC = createSelector(
  homeSelector,
  state => state.coinETHBTC
);

export const getCoinEOSBTC = createSelector(
  homeSelector,
  state => state.coinEOSBTC
);

export const getCoinXRPBTC = createSelector(
  homeSelector,
  state => state.coinXRPBTC
);

export const getCoinOSTBTC = createSelector(
  homeSelector,
  state => state.coinOSTBTC
);

export const getCoinXLMBTC = createSelector(
  homeSelector,
  state => state.coinXLMBTC
);

export const getCoinBCCBTC = createSelector(
  homeSelector,
  state => state.coinBCCBTC
);

export const getCoinLTCBTC = createSelector(
  homeSelector,
  state => state.coinLTCBTC
);

export const getCoinADABTC = createSelector(
  homeSelector,
  state => state.coinADABTC
);

export const getCoinBTCUSDT = createSelector(
  homeSelector,
  state => state.coinBTCUSDT
);

export const getCoinETCUSDT = createSelector(
  homeSelector,
  state => state.coinETCUSDT
);

export const getCoinETHUSDT = createSelector(
  homeSelector,
  state => state.coinETHUSDT
);

export const getCoinEOSUSDT = createSelector(
  homeSelector,
  state => state.coinEOSUSDT
);

export const getCoinBCCUSDT = createSelector(
  homeSelector,
  state => state.coinBCCUSDT
);

export const getCoinTRXUSDT = createSelector(
  homeSelector,
  state => state.coinTRXUSDT
);

export const getCoinXRPUSDT = createSelector(
  homeSelector,
  state => state.coinXRPUSDT
);

export const getCoinADAUSDT = createSelector(
  homeSelector,
  state => state.coinADAUSDT
);

export const getCoinNEOUSDT = createSelector(
  homeSelector,
  state => state.coinNEOUSDT
);

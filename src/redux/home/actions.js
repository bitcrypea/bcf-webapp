import {
  RECEIVE_CART_ETHBTC,
  RECEIVE_CART_BTCUSDT,
  RECEIVE_CART_BCCBTC,
  RECEIVE_CART_XRPBTC,
  RECEIVE_CART_ADABTC,
  RECEIVE_CART_ETCBTC,
  RECEIVE_COIN_NASETH,
  RECEIVE_COIN_ZILETH,
  RECEIVE_COIN_TRXETH,
  RECEIVE_COIN_EOSETH,
  RECEIVE_COIN_XRPETH,
  RECEIVE_COIN_ADAETH,
  RECEIVE_COIN_VETETH,
  RECEIVE_COIN_ETCETH,
  RECEIVE_COIN_HOTETH,
} from './types';

export const receiveCartETHBTC = data => ({
  type: RECEIVE_CART_ETHBTC,
  payload: data,
});

export const receiveCartBTCUSDT = data => ({
  type: RECEIVE_CART_BTCUSDT,
  payload: data,
});

export const receiveCartETCBTC = data => ({
  type: RECEIVE_CART_ETCBTC,
  payload: data,
});

export const receiveCartADABTC = data => ({
  type: RECEIVE_CART_ADABTC,
  payload: data,
});

export const receiveCartXRPBTC = data => ({
  type: RECEIVE_CART_XRPBTC,
  payload: data,
});

export const receiveCartBCCBTC = data => ({
  type: RECEIVE_CART_BCCBTC,
  payload: data,
});

export const receiveCoinHOTETH = data => ({
  type: RECEIVE_COIN_HOTETH,
  payload: data,
});

export const receiveCoinNASETH = data => ({
  type: RECEIVE_COIN_NASETH,
  payload: data,
});

export const receiveCoinETCETH = data => ({
  type: RECEIVE_COIN_ETCETH,
  payload: data,
});

export const receiveCoinVETETH = data => ({
  type: RECEIVE_COIN_VETETH,
  payload: data,
});

export const receiveCoinADAETH = data => ({
  type: RECEIVE_COIN_ADAETH,
  payload: data,
});

export const receiveCoinXRPETH = data => ({
  type: RECEIVE_COIN_XRPETH,
  payload: data,
});

export const receiveCoinEOSETH = data => ({
  type: RECEIVE_COIN_EOSETH,
  payload: data,
});

export const receiveCoinTRXETH = data => ({
  type: RECEIVE_COIN_TRXETH,
  payload: data,
});

export const receiveCoinZILETH = data => ({
  type: RECEIVE_COIN_ZILETH,
  payload: data,
});

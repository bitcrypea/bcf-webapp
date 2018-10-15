import {
  RECEIVE_CART_ETHBTC,
  RECEIVE_CART_BTCUSDT,
  RECEIVE_CART_BCCBTC,
  RECEIVE_CART_XRPBTC,
  RECEIVE_CART_ADABTC,
  RECEIVE_CART_ETCBTC,
  RECEIVE_COIN_HOTETH,
  RECEIVE_COIN_NASETH,
  RECEIVE_COIN_ETCETH,
  RECEIVE_COIN_VETETH,
  RECEIVE_COIN_ADAETH,
  RECEIVE_COIN_XRPETH,
  RECEIVE_COIN_EOSETH,
  RECEIVE_COIN_TRXETH,
  RECEIVE_COIN_ZILETH,
} from './types';

const getInitialState = () => ({
  cartETHBTC: {},
  cartBTCUSDT: {},
  cartETCBTC: {},
  cartADABTC: {},
  cartXRPBTC: {},
  cartBCCBTC: {},

  coinHOTETH: {},
  coinNASETH: {},
  coinETCETH: {},
  coinVETETH: {},
  coinADAETH: {},
  coinXRPETH: {},
  coinEOSETH: {},
  coinTRXETH: {},
  coinZILETH: {},
});

function home(state = getInitialState(), { type, payload }) {
  switch (type) {
    case RECEIVE_CART_ETHBTC:
      return {
        ...state,
        cartETHBTC: payload,
      };
    case RECEIVE_CART_BTCUSDT:
      return {
        ...state,
        cartBTCUSDT: payload,
      };
    case RECEIVE_CART_ETCBTC:
      return {
        ...state,
        cartETCBTC: payload,
      };
    case RECEIVE_CART_ADABTC:
      return {
        ...state,
        cartADABTC: payload,
      };
    case RECEIVE_CART_XRPBTC:
      return {
        ...state,
        cartXRPBTC: payload,
      };
    case RECEIVE_CART_BCCBTC:
      return {
        ...state,
        cartBCCBTC: payload,
      };

    case RECEIVE_COIN_HOTETH:
      return {
        ...state,
        coinHOTETH: payload,
      };
    case RECEIVE_COIN_NASETH:
      return {
        ...state,
        coinNASETH: payload,
      };
    case RECEIVE_COIN_ETCETH:
      return {
        ...state,
        coinETCETH: payload,
      };
    case RECEIVE_COIN_VETETH:
      return {
        ...state,
        coinVETETH: payload,
      };
    case RECEIVE_COIN_ADAETH:
      return {
        ...state,
        coinADAETH: payload,
      };
    case RECEIVE_COIN_XRPETH:
      return {
        ...state,
        coinXRPETH: payload,
      };
    case RECEIVE_COIN_EOSETH:
      return {
        ...state,
        coinEOSETH: payload,
      };
    case RECEIVE_COIN_TRXETH:
      return {
        ...state,
        coinTRXETH: payload,
      };
    case RECEIVE_COIN_ZILETH:
      return {
        ...state,
        coinZILETH: payload,
      };

    default:
      return state;
  }
}

export default home;

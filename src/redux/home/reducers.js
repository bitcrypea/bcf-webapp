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
  RECEIVE_COIN_ETCBTC,
  RECEIVE_COIN_ETHBTC,
  RECEIVE_COIN_EOSBTC,
  RECEIVE_COIN_XRPBTC,
  RECEIVE_COIN_OSTBTC,
  RECEIVE_COIN_XLMBTC,
  RECEIVE_COIN_BCCBTC,
  RECEIVE_COIN_LTCBTC,
  RECEIVE_COIN_ADABTC,
  RECEIVE_COIN_BTCUSDT,
  RECEIVE_COIN_ETCUSDT,
  RECEIVE_COIN_ETHUSDT,
  RECEIVE_COIN_EOSUSDT,
  RECEIVE_COIN_BCCUSDT,
  RECEIVE_COIN_TRXUSDT,
  RECEIVE_COIN_XRPUSDT,
  RECEIVE_COIN_ADAUSDT,
  RECEIVE_COIN_NEOUSDT,
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

  coinETCBTC: {},
  coinETHBTC: {},
  coinEOSBTC: {},
  coinXRPBTC: {},
  coinOSTBTC: {},
  coinXLMBTC: {},
  coinBCCBTC: {},
  coinLTCBTC: {},
  coinADABTC: {},

  coinBTCUSDT: {},
  coinETCUSDT: {},
  coinETHUSDT: {},
  coinEOSUSDT: {},
  coinBCCUSDT: {},
  coinTRXUSDT: {},
  coinXRPUSDT: {},
  coinADAUSDT: {},
  coinNEOUSDT: {},
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

    case RECEIVE_COIN_ETCBTC:
      return {
        ...state,
        coinETCBTC: payload,
      };
    case RECEIVE_COIN_ETHBTC:
      return {
        ...state,
        coinETHBTC: payload,
      };
    case RECEIVE_COIN_EOSBTC:
      return {
        ...state,
        coinEOSBTC: payload,
      };
    case RECEIVE_COIN_XRPBTC:
      return {
        ...state,
        coinXRPBTC: payload,
      };
    case RECEIVE_COIN_OSTBTC:
      return {
        ...state,
        coinOSTBTC: payload,
      };
    case RECEIVE_COIN_XLMBTC:
      return {
        ...state,
        coinXLMBTC: payload,
      };
    case RECEIVE_COIN_BCCBTC:
      return {
        ...state,
        coinBCCBTC: payload,
      };
    case RECEIVE_COIN_LTCBTC:
      return {
        ...state,
        coinLTCBTC: payload,
      };
    case RECEIVE_COIN_ADABTC:
      return {
        ...state,
        coinADABTC: payload,
      };

    case RECEIVE_COIN_BTCUSDT:
      return {
        ...state,
        coinBTCUSDT: payload,
      };
    case RECEIVE_COIN_ETCUSDT:
      return {
        ...state,
        coinETCUSDT: payload,
      };
    case RECEIVE_COIN_ETHUSDT:
      return {
        ...state,
        coinETHUSDT: payload,
      };
    case RECEIVE_COIN_EOSUSDT:
      return {
        ...state,
        coinEOSUSDT: payload,
      };
    case RECEIVE_COIN_BCCUSDT:
      return {
        ...state,
        coinBCCUSDT: payload,
      };
    case RECEIVE_COIN_TRXUSDT:
      return {
        ...state,
        coinTRXUSDT: payload,
      };
    case RECEIVE_COIN_XRPUSDT:
      return {
        ...state,
        coinXRPUSDT: payload,
      };
    case RECEIVE_COIN_ADAUSDT:
      return {
        ...state,
        coinADAUSDT: payload,
      };
    case RECEIVE_COIN_NEOUSDT:
      return {
        ...state,
        coinNEOUSDT: payload,
      };
    default:
      return state;
  }
}

export default home;

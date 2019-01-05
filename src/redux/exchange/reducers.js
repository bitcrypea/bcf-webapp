import { CREATE_BUY_SUCCESS, CREATE_SELL_SUCCESS, SET_LOADING } from './types';

const getInitialState = () => ({
  isLoading: false,
  resultBuy: {},
  resultSell: {}
});

function exchange(state = getInitialState(), { type, payload }) {
  switch (type) {
    case CREATE_BUY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resultBuy: payload
      };
    case CREATE_SELL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resultSell: payload
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state;
  }
}

export default exchange;

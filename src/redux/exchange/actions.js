import { SET_LOADING, CREATE_BUY_SUCCESS, CREATE_SELL_SUCCESS } from './types';

export const setLoading = data => ({
  type: SET_LOADING,
  payload: data
});

export const createBuySuccess = data => ({
  type: CREATE_BUY_SUCCESS,
  payload: data
});

export const createSellSuccess = data => ({
  type: CREATE_SELL_SUCCESS,
  payload: data
});

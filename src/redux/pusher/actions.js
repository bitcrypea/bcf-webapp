import {
  CREATE_AFFILIATE_CODE,
  CREATE_REFERRAL,
  ENABLE_LOADING_SWITCH,
  DISABLE_LOADING_SWITCH,
} from './types';

export const createAffiliateCode = data => ({
  type: CREATE_AFFILIATE_CODE,
  payload: data,
});

export const createReferral = data => ({
  type: CREATE_REFERRAL,
  payload: data,
});

export const disableSwitch = data => ({
  type: DISABLE_LOADING_SWITCH,
});

export const enableSwitch = data => ({
  type: ENABLE_LOADING_SWITCH,
});

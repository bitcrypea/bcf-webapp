import { CREATE_AFFILIATE_CODE, CREATE_REFERRAL } from './types';

export const createAffiliateCode = data => ({
  type: CREATE_AFFILIATE_CODE,
  payload: data,
});

export const createReferral = data => ({
  type: CREATE_REFERRAL,
  payload: data,
});

import { CREATE_AFFILIATE_CODE, CREATE_REFERRAL } from './types';

const getInitialState = () => ({
  resultCreateAffiliateCode: {},
  newReferral: {},
});

function pusherReducer(state = getInitialState(), { type, payload }) {
  switch (type) {
    case CREATE_AFFILIATE_CODE:
      return {
        ...state,
        resultCreateAffiliateCode: payload,
      };
    case CREATE_REFERRAL:
      return {
        ...state,
        newReferral: payload,
      };
    default:
      return state;
  }
}

export default pusherReducer;

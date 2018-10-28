import {
  CREATE_AFFILIATE_CODE,
  CREATE_REFERRAL,
  ENABLE_LOADING_SWITCH,
  DISABLE_LOADING_SWITCH,
  CREATE_ADDRESS,
  SAVE_PUSHER,
} from './types';

const getInitialState = () => ({
  resultCreateAffiliateCode: {},
  newReferral: {},
  loading: false,
  address: {},
  pusher: {},
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
    case SAVE_PUSHER:
      return {
        ...state,
        pusher: payload,
      };
    case CREATE_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    case ENABLE_LOADING_SWITCH:
      return {
        ...state,
        loading: true,
      };
    case DISABLE_LOADING_SWITCH:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default pusherReducer;

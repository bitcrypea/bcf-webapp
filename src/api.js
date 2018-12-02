import Pusher from 'pusher-js';
import { authTokenFromStorage } from './redux/tokens';
import runtimeEnv from '@mars/heroku-js-runtime-env';

export const initPusher = () => {
  const token = authTokenFromStorage();

  const env = runtimeEnv();

  const pusher = new Pusher('112da5ecf39968cbb761', {
    authEndpoint: env.REACT_APP_PUSHER_ENDPOINT,
    auth: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  return pusher;
};

export function pusherController(pusher, props) {
  const { createAffiliateCode, createReferral, createNewAddress } = props;
  const user_id = localStorage.getItem('affiliate_codes');
  const channel = pusher.subscribe(`private-user_${user_id}`);

  channel.bind('pusher:subscription_succeeded', function() {
    console.log('success');
  });

  channel.bind('create', function(data) {
    console.log(data);
    if (data.type === 'AffiliateCode') {
      createAffiliateCode(data);
    } else if (data.type === 'Referral') {
      createReferral(data);
    }
  });

  channel.bind('update', function(data) {
    console.log(data);
    if (data.type === 'DepositAddress') {
      createNewAddress(data.address);
    }
  });
}

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
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return pusher;
};

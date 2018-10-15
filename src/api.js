import Pusher from 'pusher-js';
import { authTokenFromStorage } from './redux/tokens';

export const initPusher = () => {
  const token = authTokenFromStorage();

  const pusher = new Pusher('112da5ecf39968cbb761', {
    authEndpoint: 'https://api-dev.bitcrypea.com/pusher/auth',
    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return pusher;
};

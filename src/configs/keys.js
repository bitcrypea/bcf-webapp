// keys.js - figure out what set of credentials to return
import { dev } from './dev';
import { prod } from './prod';

const config = dev;
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  config = prod;
}

export default config;
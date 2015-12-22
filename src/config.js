import qs from 'query-string';

let config = {
  APP_CONFIG_PROPERTY: '__CONFIG__',
  APP_MOUNT_ID: 'app',
  APP_STATE_PROPERTY: '__STATE__',
  CLIENT_CONFIG_PROPS: [
    'NODE_ENV',
    'API_ENDPOINT',
    'REDIRECT_URI',
    'CLIENT_ID',
    'CLIENT_SECRET',
    'SESSION_SECRET',
  ],
};

const { APP_CONFIG_PROPERTY } = config;

if (typeof window === 'undefined') {
  config = { ...process.env, ...config, IS_SERVER: true };
} else {
  const queryParamOverrides = qs.parse(window.location.search.slice(1));
  config = { ...window[APP_CONFIG_PROPERTY], ...queryParamOverrides, ...config, IS_SERVER: false };
}

export default config;


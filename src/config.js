let config = {};

if (typeof window === 'undefined') {
  config = { ...process.env, ...config, IS_SERVER: true };
} else {
  // config = { ...window['__CONFIG__'], ...config, IS_SERVER: false };
}

export default config;

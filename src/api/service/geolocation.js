/* eslint arrow-body-style: 0 */
import Promise from 'bluebird';
import fetch from 'node-fetch';

export default {
  lookup() {
    return Promise.resolve(fetch('http://ip-api.com/json')
    .then((res) => res.json())
    .then(({ lat, lon }) => {
      return {
        location: {
          lat,
          lng: lon,
        },
      };
    }));
  },
};

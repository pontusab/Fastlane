import Promise from 'bluebird';
import fetch from 'node-fetch';
import config from '../../config.json';

const { API_ENDPOINT } = config;

export default {
  authenticate(code) {
    return Promise.resolve(fetch(`${API_ENDPOINT}/auth?code=${code}`, {
      method: 'POST',
    }).then((res) => res.json()));
  },
};

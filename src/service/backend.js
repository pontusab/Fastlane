import Promise from 'bluebird';
import fetch from 'node-fetch';
import qs from 'query-string';
import authToken from '../util/authToken';
import config from '../../config.json';

const { API_ENDPOINT } = config;

export default {
  authenticate(code) {
    return Promise.resolve(fetch(`${API_ENDPOINT}/auth?code=${code}`, {
      method: 'POST',
    }).then((res) => res.json()));
  },

  lookup() {
    return Promise.resolve(fetch(`${API_ENDPOINT}/geolocation`)
      .then((res) => res.json()));
  },

  products({ lat, lng }) {
    const query = qs.stringify({
      latitude: lat,
      longitude: lng,
      token: authToken(),
    });

    return Promise.resolve(fetch(`${API_ENDPOINT}/products?${query}`)
      .then((res) => res.json()));
  },
};

/* eslint camelcase: 0 */
import fetch from 'node-fetch';
import qs from 'query-string';
import getResponse from '../util/getResponse';
import config from '../../config.json';

const { API_ENDPOINT } = config;
const user = JSON.parse(localStorage.getItem('user'));

export default {
  authenticate(code) {
    return fetch(`${API_ENDPOINT}/auth?code=${code}`, {
      method: 'POST',
    }).then(getResponse);
  },

  lookup() {
    return fetch(`${API_ENDPOINT}/geolocation`)
      .then(getResponse);
  },

  products(location) {
    const { lat: start_latitude, lng: start_longitude } = location;

    const query = qs.stringify({
      start_latitude,
      start_longitude,
      token: user.access_token,
    });

    return fetch(`${API_ENDPOINT}/estimates/time?${query}`)
      .then(getResponse);
  },

  prices(start, end) {
    const { location: { lat: start_latitude, lng: start_longitude } } = start;
    const { location: { lat: end_latitude, lng: end_longitude } } = end;

    const query = qs.stringify({
      start_latitude,
      start_longitude,
      end_latitude,
      end_longitude,
      token: user.access_token,
    });

    return fetch(`${API_ENDPOINT}/estimates/price?${query}`)
      .then(getResponse);
  },
};

/* eslint camelcase: 0 */
import Promise from 'bluebird';
import fetch from 'node-fetch';
import qs from 'query-string';
import getToken from '../util/getToken';
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
    const { access_token } = getToken();

    const query = qs.stringify({
      start_latitude: lat,
      start_longitude: lng,
      token: access_token,
    });

    return Promise.resolve(fetch(`${API_ENDPOINT}/estimates/time?${query}`)
      .then((res) => res.json()));
  },

  prices(start, end) {
    const { access_token } = getToken();
    const { location: { lat: start_latitude, lng: start_longitude } } = start;
    const { location: { lat: end_latitude, lng: end_longitude } } = end;

    const query = qs.stringify({
      start_latitude,
      start_longitude,
      end_latitude,
      end_longitude,
      token: access_token,
    });

    return Promise.resolve(fetch(`${API_ENDPOINT}/estimates/price?${query}`)
      .then((res) => res.json()));
  },
};

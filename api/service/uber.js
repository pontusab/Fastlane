import Promise from 'bluebird';
import qs from 'query-string';
import fetch from 'node-fetch';
import config from '../../config.json';

const {
  CLIENT_ID,
  REDIRECT_URI,
  CLIENT_SECRET,
  UBER_AUTH_ENDPOINT,
  UBER_API_ENDPOINT,
} = config;

export default {
  authenticate(code) {
    const query = qs.stringify({
      client_secret: CLIENT_SECRET,
      response_type: 'code',
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      code,
    });

    return Promise.resolve(fetch(`${UBER_AUTH_ENDPOINT}/v2/token?${query}`, {
      method: 'POST',
    }).then((res) => res.json()));
  },

  delete(request, params) {
    const { token } = params;

    return Promise.resolve(fetch(`${UBER_API_ENDPOINT}/${request}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    }).then((res) => res.json()));
  },

  request(request, params, method = 'GET') {
    const { token } = params;

    return Promise.resolve(fetch(`${UBER_API_ENDPOINT}/${request}?${qs.stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(params),
    }).then((res) => res.json()));
  },
};

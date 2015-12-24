import Promise from 'bluebird';
import qs from 'query-string';
import fetch from 'node-fetch';
import config from '../../src/config';

const {
  API_PORT,
  CLIENT_ID,
  SESSION_SECRET,
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
      code: code,
    });

    return Promise.resolve(fetch(`${UBER_AUTH_ENDPOINT}/v2/token?${query}`, {
      method: 'POST',
    }).then((res) => res.json()));
  },


  getRequest(request, query) {
    const { token } = query;
    console.log(`${UBER_API_ENDPOINT}/${request}?${qs.stringify(query)}`);
    return Promise.resolve(fetch(`${UBER_API_ENDPOINT}/${request}?${qs.stringify(query)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => res.json()));
  },

  postRequest(method, token, query) {

  },
}

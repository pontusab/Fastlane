import Promise from 'bluebird';
import qs from 'query-string';
import fetch from 'node-fetch';
import config from '../src/config';

const {
  API_PORT,
  CLIENT_ID,
  SESSION_SECRET,
  REDIRECT_URI,
  CLIENT_SECRET,
  UBER_API,
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

    return Promise.resolve(fetch(`${UBER_API}/token?${query}`, {
      method: 'POST',
    }).then((res) => res.json()));
  },


  getRequest(method, token) {
    return Promise.resolve(fetch(`${UBER_API}/${method}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((res) => res.json()));
  }


}

import qs from 'query-string';
import config from '../config';

const { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } = config;

export default {
  generateAuthUrl() {
    const query = qs.stringify({
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      scope: 'profile history request request_receipt',
      client_id: CLIENT_ID,
    });

    return `https://login.uber.com/oauth/authorize?${query}`;
  },

  generateRegisterUrl() {
    return `https://m.uber.com/sign-up?client_id=${CLIENT_SECRET}`;
  },
};

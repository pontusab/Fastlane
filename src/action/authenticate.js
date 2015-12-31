import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('AUTHENTICATE', async (code) => {
  return await backend.authenticate(code);
});

import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('AUTHENTICATE', async (code) => await backend.authenticate(code));

import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('CANCEL_REQUEST', async (id) => await backend.cancel(id));

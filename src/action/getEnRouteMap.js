import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('RIDEMAP', async (id) => await backend.requestMap(id));

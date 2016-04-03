import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('REQUEST', async (order) => await backend.request(order));

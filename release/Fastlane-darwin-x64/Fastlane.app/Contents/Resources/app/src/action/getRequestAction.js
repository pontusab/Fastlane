import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('REQUEST', async (id) => await backend.requestStatus(id));

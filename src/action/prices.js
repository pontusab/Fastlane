import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('GET_PRICES', async (start, end) => await backend.prices(start, end));

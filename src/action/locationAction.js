import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('SET_LOCATION', (location) => (location));

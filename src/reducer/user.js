import { handleActions } from 'redux-actions';

export default handleActions({
  AUTHENTICATE: (user, { payload }) => payload,
}, '');

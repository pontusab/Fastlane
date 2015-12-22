import { handleActions } from 'redux-actions';

export default handleActions({
  LOAD_USER: (user, { payload }) => payload,
}, '');

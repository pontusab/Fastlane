import { handleActions } from 'redux-actions';

export default handleActions({
  GET_SELECTED: (index, { payload }) => payload,
}, 0);

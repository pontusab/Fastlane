import { handleActions } from 'redux-actions';

export default handleActions({
  SET_LOCATION: (startLocation, { payload }) => payload,
}, null);

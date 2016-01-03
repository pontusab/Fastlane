import { handleActions } from 'redux-actions';

export default handleActions({
  GET_PRICES: (prices, { payload }) => payload,
}, []);

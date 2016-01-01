import { handleActions } from 'redux-actions';

export default handleActions({
  GET_PRODUCTS: (products, { payload }) => payload,
}, '');

import { handleActions } from 'redux-actions';

export default handleActions({
  GET_PRODUCTS: (products, { payload }) => ({ ...products, data: payload }),
  GET_PRICES: (prices, { payload }) => ({ ...prices, prices: payload.prices }),
  GET_SELECTED: (selected, { payload }) => ({ ...selected, selected: payload }),
}, { data: [], prices: [], selected: 0 });

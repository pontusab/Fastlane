import { handleActions } from 'redux-actions';

const initialState = {
  data: [],
  prices: [],
  selected: 0,
};

export default handleActions({
  GET_PRODUCTS: (products, { payload }) => ({ ...products, data: payload }),
  GET_PRICES: (prices, { payload }) => ({ ...prices, prices: payload.prices }),
  GET_SELECTED: (selected, { payload }) => ({ ...selected, selected: payload }),
}, initialState);

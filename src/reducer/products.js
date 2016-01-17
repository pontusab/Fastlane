import { handleActions } from 'redux-actions';

const initialState = {
  cars: [],
  prices: [],
  selected: 0,
};

export default handleActions({
  GET_PRODUCTS: (state, { payload }) => ({ ...state, cars: payload }),
  GET_PRICES: (state, { payload }) => ({ ...state, prices: payload.prices }),
  GET_SELECTED: (state, { payload }) => ({ ...state, selected: payload }),
}, initialState);

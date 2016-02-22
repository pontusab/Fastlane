import { handleActions } from 'redux-actions';

const initialState = {
  cars: [],
  prices: [],
};

export default handleActions({
  GET_PRODUCTS: (state, { payload }) => ({ ...state, cars: payload }),
  GET_PRICES: (state, { payload }) => ({ ...state, prices: payload.prices }),
}, initialState);

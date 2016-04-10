import { handleActions } from 'redux-actions';

const initialState = {
  cars: [],
  prices: [],
  loading: true,
};

export default handleActions({
  GET_PRODUCTS: (state, { payload }) => ({ ...state, cars: payload, loading: false }),
  GET_PRICES: (state, { payload }) => ({ ...state, prices: payload.prices, loading: false }),
}, initialState);

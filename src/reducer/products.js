import { handleActions } from 'redux-actions';

export default handleActions({
  GET_PRODUCTS: (state, { payload }) => ({ ...state, cars: payload, selected: 0 }),
  GET_PRICES: (state, { payload }) => ({ ...state, prices: payload.prices }),
  GET_SELECTED: (state, { payload }) => ({ ...state, selected: payload }),
}, { cars: [], prices: [], selected: 0 });

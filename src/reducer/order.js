import { handleActions } from 'redux-actions';

const initialState = {
  product: false,
  start: false,
  end: false,
  ridemap: false,
};

export default handleActions({
  ORDER: (state, { payload }) => ({ ...state, ...payload }),
  REQUEST: (state, { payload }) => ({ ...state, ...payload }),
  RIDEMAP: (state, { payload }) => ({
    ...state,
    ridemap: payload,
  }),
}, initialState);

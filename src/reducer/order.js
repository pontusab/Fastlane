import { handleActions } from 'redux-actions';

const initialState = {
  product: false,
  start: false,
  end: false,
};

export default handleActions({
  ORDER: (state, { payload }) => ({ ...state, ...payload }),
}, initialState);

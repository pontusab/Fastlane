import { handleActions } from 'redux-actions';

const initialState = {
  product: false,
  start: false,
  end: false,
};

export default handleActions({
  ORDER: (state, { payload }) => ({ ...state, ...payload }),
  REQUEST: (state, { payload }) => ({
    ...state,
    request_id: payload.request_id,
    status: payload.status,
}),
}, initialState);

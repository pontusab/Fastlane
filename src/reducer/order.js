import { handleActions } from 'redux-actions';

const initialState = {
  product: false,
  start: false,
  end: false,
  ridemap: false,
};

export default handleActions({
  ORDER: (state, { payload }) => ({ ...state, ...payload }),
  REQUEST: (state, { payload }) => ({
    ...state,
    request_id: payload.request_id,
    status: payload.status,
    driver: payload.driver,
    eta: payload.eta,
    vehicle: payload.vehicle,
  }),
  RIDEMAP: (state, { payload }) => ({
    ...state,
    ridemap: payload,
  }),
}, initialState);

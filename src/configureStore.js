import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducer';

export default function configureStore(initialState) {
  return compose(
    applyMiddleware(promise),
  )(createStore)(rootReducer, initialState);
}

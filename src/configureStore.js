import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducer';

const finalCreateStore = compose(
  applyMiddleware(promise)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}

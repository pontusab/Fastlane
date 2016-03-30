import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import ga from 'react-ga';
import rootReducer from './reducer';
import { GA } from '../config.json';

ga.initialize(GA);

function logActionChange() {
  return (next) => (action) => {
    ga.event({
      category: 'User',
      action: action.type,
    });
    console.log(action);
    return next(action);
  };
}

export default function configureStore(initialState) {
  return compose(
    applyMiddleware(promise),
    applyMiddleware(logActionChange),
  )(createStore)(rootReducer, initialState);
}

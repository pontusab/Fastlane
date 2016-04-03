import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import ga from 'react-ga';
import rootReducer from './reducer';
import { GA_UA } from '../config.json';

ga.initialize(GA_UA);

function logActionChange() {
  return (next) => (action) => {
    if (action.type === 'ORDER') ga.pageview('/order');

    if (action.payload.status === 'accepted') {
      ga.event({ category: 'User', action: 'Ride Request' });
    }

    return next(action);
  };
}

export default function configureStore(initialState) {
  return compose(
    applyMiddleware(promise),
    applyMiddleware(logActionChange),
  )(createStore)(rootReducer, initialState);
}

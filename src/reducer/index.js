import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import location from './location';

const rootReducer = combineReducers({
  user,
  products,
  location,
});

export default rootReducer;

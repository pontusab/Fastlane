import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import order from './order';

const rootReducer = combineReducers({
  user,
  products,
  order,
});

export default rootReducer;

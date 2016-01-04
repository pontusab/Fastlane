import { combineReducers } from 'redux';
import user from './user';
import products from './products';

const rootReducer = combineReducers({
  user,
  products,
});

export default rootReducer;

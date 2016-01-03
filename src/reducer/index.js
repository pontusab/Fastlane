import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import selected from './selected';

const rootReducer = combineReducers({
  user,
  products,
  selected,
});

export default rootReducer;

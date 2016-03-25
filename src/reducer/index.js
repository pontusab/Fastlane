// I will refactor the whole app because when i started i did not know how to use redux correct,
// the app will not need substates, it is a simple app with kind of flat state, combineReducers
// creates substates and make the object deeper than whats needed. And one thing is for sure,
// when you know your state it´s mutch simpler to design the app structure :)
// But redux is really nice

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

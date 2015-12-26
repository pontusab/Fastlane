import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App.jsx';
import Start from './component/Start.jsx';
import Search from './component/Search.jsx';
import Order from './component/Order.jsx';
import Confirm from './component/Confirm.jsx';
import { isAuthenticated } from './util/authenticate';

export default (
  <Route path="/" component={App} onEnter={isAuthenticated}>
    <IndexRoute component={Start} />
    <Route path="/search" component={Search} />
    <Route path="/order" component={Order} />
    <Route path="/confirm" component={Confirm} />
  </Route>
);

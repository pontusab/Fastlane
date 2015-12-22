import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.jsx';
import './sass/main.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    {routes}
  </Router>,
  document.getElementById('root')
);


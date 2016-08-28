import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App,
  Home,
  About,
} from './containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
  </Route>
);

export default routes;

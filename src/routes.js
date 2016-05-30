import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './pages/Home';
import About from './pages/About';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
  </Route>
);

export default routes;

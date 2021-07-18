import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Studies from './pages/Projects/Studies/Studies';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/studies" component={Studies} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

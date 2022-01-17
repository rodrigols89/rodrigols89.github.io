import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Studies from './pages/Projects/Studies/Studies';
import Turnover from './pages/Projects/Turnover/Turnover';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/studies" component={Studies} />
      <Route exact path="/turnover" component={Turnover} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AI from './pages/Projects/AI/AI';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ai" component={AI} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

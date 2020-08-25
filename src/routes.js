import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import StudiesProject from './pages/Projects/StudiesProject/StudiesProject';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/studies-project" component={StudiesProject} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

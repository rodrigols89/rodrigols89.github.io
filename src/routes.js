import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AIAlgorithms from './pages/Projects/AI-Algorithms/AI-Algorithms';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ai-algorithms" component={AIAlgorithms} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

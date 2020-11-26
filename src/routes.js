import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AIAlgorithms from './pages/Projects/AI-Algorithms/AI-Algorithms';
import Math from './pages/Projects/Math/Math';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ai-algorithms" component={AIAlgorithms} />
      <Route path="/math" component={Math} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

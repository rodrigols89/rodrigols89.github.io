import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CodingSamples from './pages/Projects/CodingSamples/CodingSamples';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/coding-samples" component={CodingSamples} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

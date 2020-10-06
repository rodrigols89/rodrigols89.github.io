import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import StudiesProject from './pages/Projects/StudiesProject/StudiesProject';
import MathProject from './pages/Projects/Math-Project/Math-Project';
import AIProject  from './pages/Projects/AI-Project/AI-Project';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/studies-project" component={StudiesProject} />
      <Route path="/ai-algorithms" component={AIProject} />
      <Route path="/math-project" component={MathProject} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

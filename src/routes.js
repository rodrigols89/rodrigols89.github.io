import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Studies from './pages/Projects/Studies/Studies';
import JSP from './pages/Projects/JSP/JSP'
import MusicalNotes from './pages/Projects/Musical-Notes/Musical-Notes'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/studies" component={Studies} />
      <Route exact path="/jsp" component={JSP} />
      <Route exact path="/musical-notes" component={MusicalNotes} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import Legendaries from '../pages/Legendaries';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokedex" component={Pokedex} />
    <Route path="/legendaries" component={Legendaries} />
  </Switch>
);

export default Routes;

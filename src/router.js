import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Type from './components/Type/Type';
import Cart from './components/Cart/Cart';
import History from './components/History/History';

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={Portfolio} path="/portfolio" />
    <Route component={Contact} path="/contact" />
    <Route component={Profile} path="/profile" />
    <Route component={Type} path="/type" />
    <Route component={Cart} path="/cart" />
    <Route component={History} path="/History" />
  </Switch>
)

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './router.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={Portfolio} path="/portfolio" />
    <Route component={Contact} path="/contact" />
  </Switch>
)

import React, { Component } from 'react';
import './App.css';
import './reset.css';
import background from "./img/bear_lake.jpg";

import router from './router';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';

class App extends Component
{
  render()
  {
    return (
      <div>
        <img src={background} className="background" alt="bear lake"/>
        <Nav />
        <Login />
        { router }
      </div>
    );
  }
}

export default App;

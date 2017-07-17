import React, { Component } from 'react';
import './App.css';
import './reset.css';
import background from "./img/bear_lake.jpg";

import router from './router';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <img src={background} className="background" alt="bear lake"/>
        <Nav />
        { router }
        <Footer />
      </div>
    );
  }
}

export default App;

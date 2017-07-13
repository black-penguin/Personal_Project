import React, {Component} from "react";
import {Link} from "react-router-dom"
import Ham from "./Ham/Ham"

import "./Nav.css"

export default class Nav extends Component
{
  constructor()
  {
    super();
    this.state=
    {
      display:"none"
    }
    this.showNav=this.showNav.bind(this);
  }

  showNav()
  {
    this.setState({display:"flex"});
  }

  render()
  {
    return (
      <div>
        <div>
          <Ham showNav={this.showNav}/>
        </div>
      </div>
    );
  }
}

import React, {Component} from "react";
import {Link} from "react-router-dom";
import Ham from "./Ham/Ham";
import Ham_menu from "./Ham_menu/Ham_menu";

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
    if(this.state.display=="none")
      this.setState({display:"block"});
    else
      this.setState({display:"none"})
  }

  render()
  {
    return (
      <div>
        <div>
          <Ham showNav={this.showNav}/>
          <Ham_menu display={this.state.display} showNav={this.showNav}/>
        </div>
      </div>
    );
  }
}

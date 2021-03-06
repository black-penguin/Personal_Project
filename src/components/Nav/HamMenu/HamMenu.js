import React from "react";
import {Link} from "react-router-dom";

import "./HamMenu.css";

const HamMenu=(props) =>
{
    return (
      <div className="menu" style={{"display":props.display}} onClick={()=> props.showNav()}>
        <Link className="nav" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="nav" to="/about">
          <h4>About</h4>
        </Link>
        <Link className="nav" to="/portfolio">
          <h4>Portfolio</h4>
        </Link>
        <Link className="nav" to="/cart">
          <h4>Shopping Cart</h4>
        </Link>
      </div>
    )
}

export default HamMenu;

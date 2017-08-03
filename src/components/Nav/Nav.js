import React, {Component} from "react";
import { connect } from "react-redux";
import '../../ducks/chooseImage';
import Ham from "./Ham/Ham";
import HamMenu from "./HamMenu/HamMenu";

import "./Nav.css"

class Nav extends Component
{
  constructor(props)
  {
    super(props);

    this.state=
    {
      display:"none",
    }
    this.showNav=this.showNav.bind(this);
  }

  showNav()
  {
    if(this.state.display==="none")
      this.setState({display:"block"});
    else
      this.setState({display:"none"});
  }

  render()
  {
    const totalItems=(<span id="cartItems">{this.props.cartItems}</span>);
    return (
      <div>
        <div>
          {this.props.cartItems>=1?totalItems:null}
          <Ham showNav={this.showNav}/>
          <HamMenu display={this.state.display} showNav={this.showNav}/>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state)
{
  return {cartItems: state.counter};
}

export default connect(mapStatetoProps)(Nav);

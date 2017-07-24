import React, {Component} from "react";
import {Link} from "react-router-dom";
import Canvas from './Canvas/Canvas';
import Metal from './Metal/Metal';
import "./Type.css";

export default class Type extends Component
{
  constructor()
  {
    super();

    this.state=
    {
      select1:"",
      display1:"none",
      select2:"none",
      display2:"none"
    }
    this.select1=this.select1.bind(this);
    this.select2=this.select2.bind(this);
    this.reset=this.reset.bind(this);
  }

  select1()
  {
    this.setState({
      select1:"show",
      display1:"block",
      select2:"",
      display2:"none"
    });
  }
  select2()
  {
    this.setState({
      select1:"",
      display1:"none",
      select2:"show",
      display2:"block"
    });
  }
  reset()
  {
    this.setState({
      select1:"",
      display1:"none",
      select2:"",
      display2:"none"
    });
  }

  render()
  {
    return (
      <div>
        <h1 id="type">Step 2</h1>
        <div className="type">
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>Canvas</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>Metal</h1>
          <Link className="nav" to="/portfolio">
            <h1 id="reset" className={`item`}  onClick={this.reset}>Reset</h1>
          </Link>
          <Canvas display={this.state.display1} />
          <Metal display={this.state.display2} />
        </div>
      </div>
    );
  }
}

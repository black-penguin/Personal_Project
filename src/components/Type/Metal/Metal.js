import React, {Component} from "react";
import Orientation from "./Orientation/Orientation";
import "./Metal.css";

export default class Metal extends Component
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
  }

  select1()
  {
    this.setState({
      select1:"show",
      display1:"block",
      select2:"",
      display2:"none",
    });
  }
  select2()
  {
    this.setState({
      select1:"",
      display1:"block",
      select2:"show",
    });
  }


    render()
    {
      return (
        <div className="metal" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>Single Image</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>Collage</h1>
          <Orientation display={this.state.display1} />
        </div>
      );
    }
  }

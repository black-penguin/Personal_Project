import React, {Component} from "react";
import SingleV from "./SingleV/SingleV";
import SingleH from "./SingleH/SingleH";
import "./OrientationS.css";

export default class OrientationS extends Component
{
  constructor()
  {
    super();

    this.state=
    {
      select1:"",
      display1:"none",
      select2:"",
      display2:"none",
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
      display1:"none",
      select2:"show",
      display2:"block",
    });
  }


    render()
    {
      return (
        <div className="orientation_s" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>Vertical</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>Horizontal</h1>
          <SingleV display={this.state.display1} />
          <SingleH display={this.state.display2} />
        </div>
      );
    }
  }

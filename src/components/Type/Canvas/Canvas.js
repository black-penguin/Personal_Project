import React, {Component} from "react";
import Single from "./Single/Single";
import ThreePanelSplit from "./ThreePanelSplit/ThreePanelSplit";
import "./Canvas.css";

export default class Canvas extends Component
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
      display1:"none",
      select2:"show",
      display2:"block",
    });
  }


    render()
    {
      return (
        <div className="canvas" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>Single Panel</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>3 Panel Split</h1>
          <Single display={this.state.display1} />
          <ThreePanelSplit display={this.state.display2} />
        </div>
      );
    }
  }

import React, {Component} from "react";
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
      display2:"none",
      select3:"none",
      display3:"none"
    }
    this.select1=this.select1.bind(this);
    this.select2=this.select2.bind(this);
    this.select3=this.select3.bind(this);
  }

  select1()
  {
    this.setState({
      select1:"show",
      display1:"block",
      select2:"",
      display2:"none",
      select3:"",
      display3:"none"
    });
  }
  select2()
  {
    this.setState({
      select1:"",
      display1:"none",
      select2:"show",
      display2:"block",
      select3:"",
      display3:"none"
    });
  }
  select3()
  {
    this.setState({
      select1:"",
      display1:"none",
      select2:"",
      display2:"none",
      select3:"show",
      display3:"block"
    });
  }


    render()
    {
      return (
        <div className="canvas" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>Single Panel</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>3 Panel Split</h1>
          <h1 className={`item ${this.state.select3}`}  onClick={this.select3}>Cluster</h1>
        </div>
      );
    }
  }

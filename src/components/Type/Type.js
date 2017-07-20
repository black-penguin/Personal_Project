import React, {Component} from "react";
import "./Type.css";

export default class Type extends Component
{
  constructor()
  {
    super();

    this.state=
    {
      selectC:"",
      selectM:"none",
      selected:"none"
    }
    this.selectC=this.selectC.bind(this);
    this.selectM=this.selectM.bind(this);
  }

  selectC()
  {
    console.log(this.state);
    this.setState({
      selectC:"show",
      selectM:"",
      selected:"Canvas",
    });
  }
  selectM()
  {
    console.log(this.state);
    this.setState({
      selectC:"",
      selectM:"show",
      selected:"metal"
    });
  }

  render()
  {
    return (
      <div>
        <h1 id="type">Step 2</h1>
        <div className="type">
          <h1 className={`item ${this.state.selectC}`}  onClick={this.selectC}>Canvas</h1>
          <h1 className={`item ${this.state.selectM}`}  onClick={this.selectM}>Metal</h1>
        </div>
      </div>
    );
  }
}

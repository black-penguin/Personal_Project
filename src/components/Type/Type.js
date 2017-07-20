import React, {Component} from "react";
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
      selectC:"",
      displayC:"none",
      selectM:"none",
      displayM:"none"
    }
    this.selectC=this.selectC.bind(this);
    this.selectM=this.selectM.bind(this);
    this.reset=this.reset.bind(this);
  }

  selectC()
  {
    this.setState({
      selectC:"show",
      displayC:"block",
      selectM:"",
      displayM:"none"
    });
  }
  selectM()
  {
    this.setState({
      selectC:"",
      displayC:"none",
      selectM:"show",
      displayM:"block"
    });
  }
  reset()
  {
    this.setState({
      selectC:"",
      displayC:"none",
      selectM:"",
      displayM:"none"
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
          <h1 id="reset" className={`item`}  onClick={this.reset}>Reset</h1>
          <Canvas display={this.state.displayC} />
          <Metal display={this.state.displayM} />
        </div>
      </div>
    );
  }
}

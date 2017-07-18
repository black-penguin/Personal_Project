import React, {Component} from "react";
import "./Footer.css";


export default class Footer extends Component
{
  render()
  {
    return (
      <div className="footer">
        <h1>AmidstTheMountains Photography</h1>
        <a href="tel:#">
          <h2>(Phone Number)</h2>
        </a>
        <h2>Orem, Utah</h2>
      </div>
    );
  }
}

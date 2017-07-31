import React, {Component} from "react";
import "./About.css";
import gitHub from "./GitHub-Mark-Light-120px-plus.png"

export default class About extends Component
{

  render()
  {
    return (
      <div>
        <h1 id="about">About</h1>
        <div className="about">
          <h1>Personal Project for DevMountain in Provo Utah </h1>
          <h1>- Html</h1>
          <h1>- Css</h1>
          <h1>- Sass</h1>
          <h1>- React</h1>
          <h1>- React Redux</h1>
          <h1>- Node.js</h1>
          <h1>- PostgreSQL</h1>
          <h1>- Stripe</h1>
          <h1>- Auth0</h1>
          <a href="https://github.com/black-penguin">
            <img src={gitHub} />
          </a>
        </div>
      </div>
    );
  }
}

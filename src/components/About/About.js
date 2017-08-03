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
        <h1>Personal Project for DevMountain in Provo, Utah </h1>
          <div className="info">
            <div className="details">
              <h1>- Html - Css -Sass</h1>
              <h1>- React - React Redux</h1>
              <h1>- redux-promise-middleware</h1>
              <h1>- Axios - Node.js</h1>
              <h1>- PostgreSQL</h1>
              <h1>- React-router-dom</h1>
              <h1>- Stripe - Auth0</h1>
              <h1>- Body-parser</h1>
              <h1>- Express</h1>
              <h1>- Massive</h1>
            </div>
          </div>
          <a href="https://github.com/black-penguin">
            <img alt="gitHub logo" src={gitHub} />
          </a>
        </div>
      </div>
    );
  }
}

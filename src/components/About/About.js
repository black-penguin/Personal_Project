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
          <div className="info">
            <div className="details">
              <h1> A Portfolio site for some pictures I have taken over the years and as a personal project for Devmountain's full time Web Development course.</h1>
              <h1>These are pictures that I have taken in the States of Utah, Idaho, and Michigan</h1>
            </div>
          </div>
          <a href="https://github.com/black-penguin/photography-app">
            <img alt="gitHub logo" src={gitHub} />
          </a>
        </div>
      </div>
    );
  }
}

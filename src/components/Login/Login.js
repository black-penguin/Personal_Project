import React, {Component} from "react";
import "./Login.css";


export default class Login extends Component
{

  render()
  {
    return (
      <div className="login">
        <div id="login">
          <a href="http://localhost:3001/auth">
            <h1>Login</h1>
          </a>
        </div>
      </div>
    );
  }
}

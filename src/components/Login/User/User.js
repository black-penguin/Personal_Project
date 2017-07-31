import React from "react";
import {Link} from "react-router-dom";
import "./User.css";

const User=(props) =>
{
    return (
      <div className="user" style={{"display":props.display}} onClick={()=> props.showUser()}>
        <Link className="nav" to="/profile">
          <h4>My Profile</h4>
        </Link>
        <a className="nav" href="http://localhost:3001/logout">
          <h4>Logout</h4>
        </a>
      </div>
    )
}

export default User;

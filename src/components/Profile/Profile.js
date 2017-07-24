import React, {Component} from "react";
import axios from "axios";
import "./Profile.css";

export default class Profile extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      display:'none',
      profile: ''
    }
  }

  componentDidMount()
  {
    axios.get('/me')
    .then( res =>
      {
        console.log('res', res);
        if(res.data.displayName)
        {
          this.setState({
            display:"block",
            profile: res.data.displayName,
            email: res.data.emails[0]["value"]
          })
        }
      })
  }

  render()
  {
    return (
      <div>
        <h1 id="profile">Profile</h1>
        <div className="profile">
          <h1>Name - {this.state.profile}</h1>
          <h1>Email - {this.state.email}</h1>
        </div>
      </div>
    );
  }
}

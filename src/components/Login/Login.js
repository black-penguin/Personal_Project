import React, {Component} from "react";
import axios from "axios";
import "./Login.css";
import User from "./User/User";

export default class Login extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      user: '',
      display:"none"
    }
    this.showUser=this.showUser.bind(this);
  }

  showUser()
  {
    if(this.state.display==="none")
    this.setState({display:"block"});
    else
    this.setState({display:"none"});
  }

  componentDidMount()
  {
    axios.get('/me')
    .then( res =>
      {
        if(res.data.displayName)
        {
          this.setState({
            user: res.data.displayName
          })
        }
      })
  }


  render()
  {
    const login_btn=(<div id="login">
                      <a href="http://localhost:3001/auth">
                        <h1>Login</h1>
                      </a>
                    </div>);
    const login_user=(
                     <div>
                       <div id="user" onClick={()=> this.showUser()}>
                          <h1>
                            {this.state.user}
                          </h1>
                       </div>
                       <User display={this.state.display} showUser={this.showUser}/>
                     </div>);
    return (
      <div className="login">
        {this.state.user===''?login_btn:login_user}
      </div>
    );
  }
}

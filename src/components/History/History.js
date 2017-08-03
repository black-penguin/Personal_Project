import React, {Component} from "react";
import axios from 'axios';
import "./History.css";

export default class History extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      user: '',
      userID: [],
      cart:[]
    }
  }


  componentDidMount()
  {
    axios.get('/me')
    .then( res =>
      {
        if(res.data.displayName)
        {
          console.log(res.data.identities[0].user_id);
          axios.get(`/api/cart/history/${res.data.identities[0].user_id}`)
          .then( res =>
            {
              this.setState({
                cart: res.data
              })
            });
          this.setState({
            user: res.data.displayName,
            userID:res.data.identities[0].user_id,
            email:res.data.emails[0]["value"]
          })
        }
      });
  }

  render()
  {
    const login_btn=(<div id="checkout">
                       <div>
                        <a href="http://localhost:3001/auth">
                          <h1>Login</h1>
                        </a>
                      </div>
                    </div>);
    const shoppingCart= this.state.cart.map((item, i) =>
    {
      return(
        <div className="shoppingItem" key={this.state.cart.i}>
          <img alt={item.alt} src={item.url} />
          <h1>{item.alt}</h1>
          <h1>{item.type}</h1>
          <h1>{item.size}</h1>
          <h1>${item.price+item.picprice}</h1>
        </div>
      );
    });
    return (
      <div>
        <h1 id="cart">Shopping Cart</h1>
        <div className="cart">
          <div className="shopping">
            {shoppingCart}
          </div>
            {this.state.user===''?login_btn:null}
        </div>
      </div>
    );
  }
}

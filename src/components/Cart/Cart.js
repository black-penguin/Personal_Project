import React, {Component} from "react";
import StripeCheckout from 'react-stripe-checkout';
import stripe from './stripeKey';
import axios from 'axios';
import "./Cart.css";

export default class Cart extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      user: '',
    }
  }

  onToken = (token) =>
  {
    token.card = void 0;
    axios.post('http://localhost:3001/payment',
          { token, amount: 7600 })
         .then(response => {
      alert('it works!')
    });
  }

  componentDidMount()
  {
    axios.get('/me')
    .then( res =>
      {
        if(res.data.displayName)
        {
          this.setState({
            user: res.data.displayName,
            email:res.data.emails[0]["value"]
          })
        }
      })
  }

  render()
  {
    const login_btn=(<div>
                      <a href="http://localhost:3001/auth">
                        <h1>Login</h1>
                      </a>
                    </div>);
    const purchase=(<StripeCheckout
                      token={this.onToken}
                      stripeKey={stripe.pub_key}
                      amount={7600}
                      email={this.state.email}
                      shippingAddress>
                    </StripeCheckout>);
    return (
      <div>
        <h1 id="cart">Shopping Cart</h1>
        <div className="cart">
          <div id="checkout">
          {this.state.user===''?login_btn:purchase}
          </div>
        </div>
      </div>
    );
  }
}

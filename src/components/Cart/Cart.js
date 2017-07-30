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
      userID: [],
      cart:[]
    }
  }

  onToken = (token) =>
  {
    token.card = void 0;
    axios.post('http://localhost:3001/payment',
          { token, amount: this.state.total*100 })
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
          axios.get(`/api/cart/${res.data.identities[0].user_id}`)
          .then( res =>
            {
              this.setState({
                cart: res.data
              })
            });
          axios.get(`/api/cart/sum/${res.data.identities[0].user_id}`)
          .then(res=>
          {
            this.setState({
              total:res.data[0].sum
            })
          })
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
    const login_btn=(<div>
                      <a href="http://localhost:3001/auth">
                        <h1>Login</h1>
                      </a>
                    </div>);
    const purchase=(<StripeCheckout
                      token={this.onToken}
                      stripeKey={stripe.pub_key}
                      amount={this.state.total*100}
                      email={this.state.email}
                      shippingAddress>
                    </StripeCheckout>);
    const shoppingCart= this.state.cart.map((item, i) =>
    {
      return(
        <div className="shoppingItem" key={this.state.cart.i}>
          <img alt={item.alt} src={item.url} />
          <h1>{item.alt}</h1>
          <h1>{item.type}</h1>
          <h1>{item.size}</h1>
          <h1>${item.price+item.picprice}</h1>
          <h1>X</h1>
        </div>
      );
    });
    const shoppingTotal=(<h1>${this.state.total}</h1>)
    return (
      <div>
        <h1 id="cart">Shopping Cart</h1>
        <div className="cart">
          <div className="shopping">
            {shoppingCart}
          </div>
          <div id="checkout">
            {this.state.user===''?null:shoppingTotal}
            {this.state.user===''?login_btn:purchase}
          </div>
        </div>
      </div>
    );
  }
}

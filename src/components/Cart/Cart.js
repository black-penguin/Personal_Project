import React, {Component} from "react";
import { connect } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import stripe from './stripeKey';
import axios from 'axios';
import {cartItems} from '../../ducks/chooseImage';
import "./Cart.css";

class Cart extends Component
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
    this.removeCart=this.removeCart.bind(this);
    this.addCartHistory=this.addCartHistory
  }

  onToken = (token) =>
  {
    token.card = void 0;
    axios.post('http://localhost:3001/payment',
          { token, amount: (Number(this.state.total)+((this.state.cart.length)*10.00)+((Number(this.state.total)+((this.state.cart.length)*10.00))*.047))*100 })
        .then(response =>
        {
          this.addCartHistory();
          axios.delete(`/api/cart/clear/${this.state.userID}`)
            .then(res=>
            {
              this.setState(
              {
                cart: [],
                total:0
              })
              this.props.cartItems(this.state.userID)
          })
        });
  }

  addCartHistory ()
  {
    this.state.cart.map((item, i) =>
    {
      axios.post(`/api/cart/history/add/${item.auth0id}/${item.picid}/${item.sizeid}`)
        .then(()=>null);
    })
  }

  removeCart(id)
  {
    axios.delete(`/api/cart/rm/${id}`)
    .then( res =>
      {
        this.state.cart.splice(this.state.cart.length-1, 1);
      });
      axios.get(`/api/cart/${this.state.userID}`)
      .then( res =>
        {
          this.setState({
            cart: res.data
          })
        });
      axios.get(`/api/cart/sum/${this.state.userID}`)
        .then(res=>
        {
          this.setState({
            total:res.data[0].sum
          })
          this.props.cartItems(this.state.userID)
        })
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
                      amount={(Number(this.state.total)+((this.state.cart.length)*10.00)+((Number(this.state.total)+((this.state.cart.length)*10.00))*.047))*100}
                      email={this.state.email}
                      shippingAddress
                      billingAddress>
                      Checkout
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
          <h1 className="rm" onClick={()=>{this.removeCart(item.scid)}}>X</h1>
        </div>
      );
    });
    const shoppingTotal=(<h1 className="total">${Math.round((Number(this.state.total)+((this.state.cart.length)*10.00)+((Number(this.state.total)+((this.state.cart.length)*10.00))*.047)) * 100) / 100}</h1>)
    const shipping=(<div className="shoppingItem">
      <h1>Shipping</h1>
      <h1>$10.00</h1>
    </div>)
    const tax=(<div className="shoppingItem">
      <h1>Sales Tax</h1>
      <h1>4.7%</h1>
    </div>)
    return (
      <div>
        <h1 id="cart">Shopping Cart</h1>
        <div className="cart">
          <div className="shopping">
            {shoppingCart}
            {this.state.user===''?null:shipping}
            {this.state.user===''?null:tax}
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

function mapStatetoProps(state)
{
  return {counter: state.counter};
}

export default connect(mapStatetoProps, {cartItems})(Cart);

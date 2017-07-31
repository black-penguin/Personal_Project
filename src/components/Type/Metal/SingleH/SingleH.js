import React, {Component} from "react";
import { connect } from "react-redux";
import axios from "axios";
import {cartItems} from '../../../../ducks/chooseImage';
import Enlarge from "../../Enlarge/Enlarge";
import "./SingleH.css";

class SingleH extends Component
{
  constructor(props)
  {
    super(props);

    this.state=
    {
      picture:[],
      sizeInfo:[],
      user: [],
      display:"none",
      select1:"show",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      size:"select1",
      img:this.props.img
    }
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.select1=this.select1.bind(this);
    this.select2=this.select2.bind(this);
    this.select3=this.select3.bind(this);
    this.select4=this.select4.bind(this);
    this.select5=this.select5.bind(this);
    this.select6=this.select6.bind(this);
    this.getPrice=this.getPrice.bind(this);
    this.addToCart=this.addToCart.bind(this);
  }

  showModal()
  {
    this.setState({
      display:"block"
    });
  }

  closeModal()
  {
    this.setState({
      display:"none"
    })
  }

  select1()
  {
    this.setState({
      select1:"show",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      size:"select1"
    });
    this.getPrice(1);
  }
  select2()
  {
    this.setState({
      select1:"",
      select2:"show",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      size:"select2"
    });
    this.getPrice(2);
  }
  select3()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"show",
      select4:"",
      select5:"",
      select6:"",
      size:"select3"
    });
    this.getPrice(3);
  }
  select4()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"show",
      select5:"",
      select6:"",
      size:"select4"
    });
    this.getPrice(4);
  }
  select5()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"show",
      select6:"",
      size:"select5"
    });
    this.getPrice(5);
  }
  select6()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"show",
      size:"select6"
    });
    this.getPrice(6);
  }

  getPrice(choice)
  {
    axios.get(`/api/size/${choice}`)
    .then( res =>
      {
        this.setState({
          sizeInfo: res.data[0]
        })
      })
    .catch((err)=>null)
    axios.get('/me')
    .then( res =>
      {
        if(res.data.displayName)
        {
          this.setState({
            user: res.data.identities[0].user_id
          })
        }
      })
  }

  addToCart (userID, pictureID, sizeID)
  {
    axios.post(`/api/cart/add/${userID}/${pictureID}/${sizeID}`)
      .then(()=>this.props.cartItems(userID));
  }

  componentDidMount()
  {
    axios.get(`/api/image/${this.state.img}`)
    .then( res =>
      {
        this.setState({
          picture: res.data[0]
        })
      })
    .catch((err)=>null)
  }

    render()
    {
      const add=(<h1 id="add" onClick={()=>{this.addToCart(this.state.user, this.state.picture.id, this.state.sizeInfo.id)}}>Add to Cart</h1>);
      const login_btn=(<div id="add">
                        <a href="http://localhost:3001/auth">
                          <h1>Login</h1>
                        </a>
                      </div>);
      return (
        <div className="single_h" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>11 x 14</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>12 x 12</h1>
          <h1 className={`item ${this.state.select3}`}  onClick={this.select3}>16 x 20</h1>
          <h1 className={`item ${this.state.select4}`}  onClick={this.select4}>16 x 24</h1>
          <h1 className={`item ${this.state.select5}`}  onClick={this.select5}>20 x 30</h1>
          <h1 className={`item ${this.state.select6}`}  onClick={this.select6}>24 x 36</h1>
          <div>
            <img className={`sample ${this.state.size}`} src={this.state.picture.url} alt={this.state.picture.alt} onClick={this.showModal} />
            <Enlarge display={this.state.display} picture={this.state.img} close={this.closeModal} />
          </div>
          <div className="total">
            <h1>${this.state.picture.picprice}.00</h1>
            <h1 id="last">+ ${this.state.sizeInfo.price}.00</h1>
            <h1>${0+this.state.sizeInfo.price+this.state.picture.picprice}.00</h1>
            <br />
            {this.state.user.length<1?login_btn:add}
          </div>
        </div>
      );
    }
  }

  function mapStatetoProps(state)
  {
  	return {img: state.img};
  }

  export default connect(mapStatetoProps, {cartItems})(SingleH);

import React, {Component} from "react";
import { connect } from "react-redux";
import axios from "axios";
import '../../../../ducks/chooseImage';
import Enlarge from "../../Enlarge/Enlarge";
import "./ThreePanelSplit.css";

class ThreePanelSplit extends Component
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
      enl:"none",
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"",
      split:"",
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
    this.select7=this.select7.bind(this);
    this.select8=this.select8.bind(this);
    this.select9=this.select9.bind(this);
    this.select10=this.select10.bind(this);
    this.getPrice=this.getPrice.bind(this);
    this.addToCart=this.addToCart.bind(this);
  }

  showModal()
  {
    this.setState({
      enl:"block"
    });
  }

  closeModal()
  {
    this.setState({
      enl:"none"
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
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"one",
      split:"select1"
    });
    this.getPrice(10);
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
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"one",
      split:"select2"
    });
    this.getPrice(11);
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
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"one",
      split:"select3"
    });
    this.getPrice(12);
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
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"two",
      split:"select4"
    });
    this.getPrice(13);
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
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"two",
      split:"select5"
    });
    this.getPrice(14);
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
      select7:"",
      select8:"",
      select9:"",
      select10:"",
      size:"two",
      split:"select6"
    });
    this.getPrice(15);
  }
  select7()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      select7:"show",
      select8:"",
      select9:"",
      select10:"",
      size:"three",
      split:"select7"
    });
    this.getPrice(16);
  }
  select8()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      select7:"",
      select8:"show",
      select9:"",
      select10:"",
      size:"four",
      split:"select8"
    });
    this.getPrice(17);
  }
  select9()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      select7:"",
      select8:"",
      select9:"show",
      select10:"",
      size:"five",
      split:"select9"
    });
    this.getPrice(18);
  }
  select10()
  {
    this.setState({
      select1:"",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      select7:"",
      select8:"",
      select9:"",
      select10:"show",
      size:"six",
      split:"select10"
    });
    this.getPrice(19);
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
    this.select1();
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
        <div className="three_panel_split" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>56 x 36, 28x36, 14x36, 14x36</h1>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>56 x 36, 14x36, 28x36, 14x36</h1>
          <h1 className={`item ${this.state.select3}`}  onClick={this.select3}>56 x 36, 14x36, 14x36, 28x36</h1>
          <h1 className={`item ${this.state.select5}`}  onClick={this.select5}>48 x 36, 24x36, 12x36, 12x36</h1>
          <h1 className={`item ${this.state.select4}`}  onClick={this.select4}>48 x 36, 12x36, 24x36, 12x36</h1>
          <h1 className={`item ${this.state.select6}`}  onClick={this.select6}>48 x 36, 12x36, 12x36, 24x36</h1>
          <h1 className={`item ${this.state.select7}`}  onClick={this.select7}>48 x 30, 3-16x30</h1>
          <h1 className={`item ${this.state.select8}`}  onClick={this.select8}>20 x 60, 3-20x20</h1>
          <h1 className={`item ${this.state.select9}`}  onClick={this.select9}>60 x 20, 3-20x20</h1>
          <h1 className={`item ${this.state.select10}`}  onClick={this.select10}>36 x 27 3-12x27</h1>
          <div>
            <img className={`sample ${this.state.size}`} src={this.state.picture.url} alt={this.state.picture.alt} onClick={this.showModal} />
            <div className={this.state.split} onClick={this.showModal}>
              <div id="one"></div>
              <div id="two"></div>
              <div id="three"></div>
            </div>
          </div>
          <Enlarge display={this.state.enl} picture={this.state.img} close={this.closeModal} />
          <div className="total">
            <h1>${this.state.picture.picprice}.00</h1>
            <h1>+ ${this.state.sizeInfo.price}.00</h1>
            <h1 id = "ship">+ Shipping </h1>
            <h1>${0+this.state.sizeInfo.price+this.state.picture.picprice+10}.00</h1>
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

  export default connect(mapStatetoProps)(ThreePanelSplit);

import React, {Component} from "react";
import { connect } from "react-redux";
import axios from "axios";
import '../../../../ducks/chooseImage';
import Enlarge from "../../Enlarge/Enlarge";
import "./SingleV.css";

class SingleV extends Component
{
  constructor(props)
  {
    super(props);

    this.state=
    {
      picture:[],
      display:"none",
      select1:"show",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      size:"select1",
    }
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.select1=this.select1.bind(this);
    this.select2=this.select2.bind(this);
    this.select3=this.select3.bind(this);
    this.select4=this.select4.bind(this);
    this.select5=this.select5.bind(this);
    this.select6=this.select6.bind(this);
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
  }

  componentDidMount()
  {
    console.log(this.state.img);
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
      return (
        <div className="single_v" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>11 x 14</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>12 x 12</h1>
          <h1 className={`item ${this.state.select3}`}  onClick={this.select3}>16 x 20</h1>
          <h1 className={`item ${this.state.select4}`}  onClick={this.select4}>16 x 24</h1>
          <h1 className={`item ${this.state.select5}`}  onClick={this.select5}>20 x 30</h1>
          <h1 className={`item ${this.state.select6}`}  onClick={this.select6}>24 x 36</h1>
          <div>
          <img className={`sample ${this.state.size}`} src={this.state.picture.url} alt={this.state.img} onClick={this.showModal} />
            <Enlarge display={this.state.display} picture={this.state.img} close={this.closeModal} />
          </div>
        </div>
      );
    }
  }

  function mapStatetoProps(state)
  {
    return {img: state.img};
  }

  export default connect(mapStatetoProps)(SingleV);

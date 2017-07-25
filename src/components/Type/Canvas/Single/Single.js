import React, {Component} from "react";
import { connect } from "react-redux";
import '../../../../ducks/chooseImage';
import Enlarge from "../../Enlarge/Enlarge";
import "./Single.css";

class Single extends Component
{
  constructor(props)
  {
    super(props);

    this.state=
    {
      display:"none",
      enl:"none",
      select1:"show",
      select2:"",
      select3:"",
      select4:"",
      select5:"",
      select6:"",
      select7:"",
      select8:"",
      select9:"",
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
    this.select7=this.select7.bind(this);
    this.select8=this.select8.bind(this);
    this.select9=this.select9.bind(this);
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
      select7:"",
      select8:"",
      select9:"",
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
      select7:"",
      select8:"",
      select9:"",
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
      select7:"",
      select8:"",
      select9:"",
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
      select7:"",
      select8:"",
      select9:"",
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
      select7:"",
      select8:"",
      select9:"",
      size:"select6"
    });
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
      size:"select7"
    });
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
      size:"select8"
    });
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
      size:"select9"
    });
  }

    render()
    {
      console.log("single", this.props.display);
      return (
        <div className="single" style={{"display":this.props.display}}>
          <h1 className={`item ${this.state.select1}`}  onClick={this.select1}>12 x 16</h1>
          <h1 className={`item ${this.state.select2}`}  onClick={this.select2}>14 x 14</h1>
          <h1 className={`item ${this.state.select3}`}  onClick={this.select3}>16 x 20</h1>
          <h1 className={`item ${this.state.select4}`}  onClick={this.select4}>18 x 24</h1>
          <h1 className={`item ${this.state.select5}`}  onClick={this.select5}>20 x 30</h1>
          <h1 className={`item ${this.state.select6}`}  onClick={this.select6}>24 x 32</h1>
          <h1 className={`item ${this.state.select7}`}  onClick={this.select7}>16 x 48</h1>
          <h1 className={`item ${this.state.select8}`}  onClick={this.select8}>30 x 40</h1>
          <h1 className={`item ${this.state.select9}`}  onClick={this.select9}>40 x 60</h1>
          <div>
            <img className={`sample ${this.state.size}`} src={this.state.img} alt={this.state.img} onClick={this.showModal} />
            <Enlarge display={this.state.enl} picture={this.state.img} close={this.closeModal} />
          </div>
        </div>
      );
    }
  }

  function mapStatetoProps(state)
  {
  	return {img: state.img};
  }

  export default connect(mapStatetoProps)(Single);

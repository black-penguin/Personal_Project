import React, {Component} from "react";
import { connect } from "react-redux";
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
      display:"none",
      enl:"none",
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
      split:"select2",
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
  }

    render()
    {
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
            <img className={`sample ${this.state.size}`} src={this.state.img} alt={this.state.img}  />
            <div className={this.state.split} onClick={this.showModal}>
              <div id="one"></div>
              <div id="two"></div>
              <div id="three"></div>
            </div>
          </div>
          <Enlarge display={this.state.enl} picture={this.state.img} close={this.closeModal} />
        </div>
      );
    }
  }

  function mapStatetoProps(state)
  {
  	return {img: state.img};
  }

  export default connect(mapStatetoProps)(ThreePanelSplit);

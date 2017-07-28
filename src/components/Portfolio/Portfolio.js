import React, {Component} from "react";
import axios from "axios";
import Enlarge from "./Enlarge/Enlarge";
import Selector from "./Selector/Selector";
import "./Portfolio.css";

import arr from "./Pictures";

export default class Portfolio extends Component
{
  items = [];

  constructor()
  {
    super();
    this.state=
    {
      img:[]
    };
    this.view=[];
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);

  }

  showModal(image)
  {
    this.setState(()=>{
      var img = {};
      img[image]='flex';
      return img;
    });

  }

  closeModal(image)
  {
    this.setState(()=>{
      var img = {};
      img[image]='none';
      return img;
    });
  }

  componentDidMount()
  {
    axios.get('/api/images')
    .then( res =>
      {
        this.setState({
          img: res.data,
        })
      })
  }

  render()
  {
    const pic = this.state.img.map((img, i) =>
    {
      return(
        <div key={this.state.img.i}>
          <Selector alt={img.alt} id={img.id}  picture={img.url} open={this.showModal} />
        </div>
      );
    });
    const picEn = arr.map((img, i) =>
    {
      return(
        <div key={arr.i}>
        <Enlarge alt={img} picture={img} display={this.state[img]} close={this.closeModal}/>
        </div>
      );
    });
    return (
      <div>
        <h1 id="portfolio">Portfolio</h1>
        <div className="imgs">
          {pic}
          {picEn}
        </div>
      </div>
    );
  }
}

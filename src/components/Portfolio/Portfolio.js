import React, {Component} from "react";
import axios from "axios";
import Enlarge from "./Enlarge/Enlarge";
import Selector from "./Selector/Selector";
import "./Portfolio.css";


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
          img: res.data
        })
      })
  }

  render()
  {
    console.log("bug", this.state.img);
    const pic = this.state.img.map((elem, i) =>
    {
      return(
        <div>
          <Selector alt={elem.url}  picture={elem.url} open={this.showModal} />
          <Enlarge alt={elem.url} picture={elem.url} display={elem.url} close={this.closeModal}/>
        </div>
      );
    });

    return (
      <div>
        <h1 id="portfolio">Portfolio</h1>
        <div className="imgs">
          {pic}
        </div>
      </div>
    );
  }
}

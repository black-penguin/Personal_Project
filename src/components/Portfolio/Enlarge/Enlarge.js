import React from "react";
import {Link} from "react-router-dom";
import "./Enlarge.css";

const Enlarge=(props) =>
{
    return (
      <div className="modal" style={{"display": `${props.display}`}}>
        <div className="modal-content animate">
          <div className="imgcontainer">
            <span onClick={() => props.close(props.picture)}>
              <img className="enlarge" src={props.picture} alt={props.alt}/>
            </span>
            <div className="add">
              <Link className="nav" to="/">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Enlarge;

import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {choice} from '../../../ducks/chooseImage';
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
              <Link className="nav" to="/type" onClick={()=>props.choice(props.picture)}>
                Select
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

function mapStatetoProps(state)
{
	return state;
}

export default connect(mapStatetoProps, {choice})(Enlarge);

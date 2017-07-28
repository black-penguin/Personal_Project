import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {choice} from '../../../ducks/chooseImage';
import "./Selector.css";

const Selector=(props) =>
{
    return (
      <div className="enl tile">
        <img className="tile" src={props.picture} alt={props.alt} onClick={() => props.open(props.picture)}/>
        <Link className="nav" to="/type" onClick={()=>props.choice(props.id)}>
          Next
        </Link>
      </div>
    )
}

function mapStatetoProps(state)
{
	return state;
}

export default connect(mapStatetoProps, {choice})(Selector);

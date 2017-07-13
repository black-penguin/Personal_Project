import React from "react";
import "./Ham.css";

const Ham=(props) =>
{
    return (
      <div onClick={()=> props.showNav()}>
        <svg className="HAM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="white" d="M17.5 6h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5zM17.5 11h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5zM17.5 16h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
        </svg>
      </div>
    )
}

export default Ham;

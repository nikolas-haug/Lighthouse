import React from "react";

const Button = (props) => {
  return(
    <button onClick={props.handleButtonClick} className="btn btn-warning btn-lg">Search for providers</button>
  )
};

export default Button;
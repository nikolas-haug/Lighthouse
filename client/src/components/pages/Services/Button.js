import React from "react";

const Button = (props) => {
  return(
    <button onClick={props.handleButtonClick} className="btn btn-primary btn-search btn-lg">Search for providers</button>
  )
};

export default Button;
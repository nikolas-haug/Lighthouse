import React from "react";

const Input = (props) => {
    return (
        
            <div className="input-group">
                <input
                type="text" 
                className="form-control" 
                placeholder="Search for..."
                id="searchTerm"
                value={props.searchTerm}
                onChange={props.handleChange}
                required 
                />
                <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-envelope"></span>
                </button>
                </span>
            </div> 
      
    )
}

export default Input;
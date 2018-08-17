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
            </div> 
      
    )
}

export default Input;
import React from "react";

const Results = (props) => {
  return(
    <div>
        <h1>Results</h1>
        <div>
            {props.results.map((provider) => {
                return (
                    <div>
                        <h1>{provider.practices.name}</h1>
                    </div>
                )  
            })}
        </div>
    </div>
    )
};

export default Results;
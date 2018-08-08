import React from "react";

const Results = (props) => {

  return(
    <div>
        <h1>Results</h1>
        <div>
            {props.results.map((provider) => {
                return (
                    <div key={provider.practices[0].uid}>
                        <h1>{provider.practices[0].name}</h1>
                        <p>{provider.profile.bio}</p>
                        <h5>{provider.practices[0].visit_address.street}</h5>
                        {/* <h4>{provider.practices[0].zip}</h4> */}
                    </div>
                )  
            })}
        </div>
    </div>
    )
};

export default Results;
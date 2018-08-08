import React from "react";

const Results = (props) => {

  return(
    <div>
        <h1>Results</h1>
        <div>
            {props.results.map((provider) => {
                // TO DO - check if the provider has a valid website, if not display alert message
                const websiteURL = "no website available" || `${provider.practices[0].website}`

                return (
                    <div key={provider.practices[0].uid}>
                        <h1>{provider.practices[0].name}</h1>
                        <p>{provider.profile.bio}</p>
                        <h5>{provider.practices[0].visit_address.city}</h5>
                        <h5>{provider.practices[0].visit_address.street}</h5>
                        <h4>{provider.practices[0].visit_address.zip}</h4>
                        <h4>{provider.practices[0].phones[0].number}</h4>
                        {/* <a href={websiteURL}>`${websiteURL}`</a> */}
                    </div>
                )  
            })}
        </div>
    </div>
    )
};

export default Results;
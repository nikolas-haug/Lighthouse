import React from "react";

const showResults = results => results.map((provider) => {
    // TO DO - check if the provider has a valid website, if not display alert message
    // TO DO - if no results available, display message to user
    
    return (
        <div key={provider.practices[0].uid}>
            <h1>{provider.practices[0].name}</h1>
            <p>{provider.profile.bio}</p>
            <h5>{provider.practices[0].visit_address.city}</h5>
            <h5>{provider.practices[0].visit_address.street}</h5>
            <h4>{provider.practices[0].visit_address.zip}</h4>
            <h4>{provider.practices[0].phones[0].number}</h4>
            <a href={provider.practices[0].website}>{provider.practices[0].website}</a>
        </div>
    )  
});

const showNoResults = () => {}

const Results = (props) => {

  return(
    <div>
        <div>
            {props.results.length > 0 ? <h1>Results!</h1> : <h5>No results to display. Please enter your search terms.</h5>}
            <hr />
            {props.results.length > 0 ? showResults(props.results) : showNoResults()}
        </div>
    </div>
    )
};

export default Results;
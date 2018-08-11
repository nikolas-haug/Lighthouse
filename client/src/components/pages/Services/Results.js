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
            <a href={`tel: ${provider.practices[0].phones[0].number}`}>{provider.practices[0].phones[0].number}</a>
            <a href={provider.practices[0].website}>{provider.practices[0].website}</a>
        </div>
    )  
});

const showNoResults = () => {}

const Results = (props) => {

  return(
    <div>
        <div>
            {props.results.length > 0 ? (
                <div><h1>Results!</h1>
                <button onClick={props.handleButtonClick}>go back to search</button></div>
             ) : ( 
                <h5></h5>
             )}
            <hr />
            {props.results.length > 0 ? showResults(props.results) : showNoResults()}
        </div>
    </div>
    )
};

export default Results;
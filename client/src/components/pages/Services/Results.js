import React from "react";

const showResults = results => results.map((provider) => {
    // loop through the array of returned results from the api and display it on the page
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

const Results = (props) => {
  // check that there are results returned to the array, otherwise display nothing
  return(
    <div>
        <div>
            {props.results.length > 0 && <div><h1>Results!</h1>
                <button onClick={props.handleButtonClick}>go back to search</button></div>}
            <hr />
            {props.results.length > 0 && showResults(props.results)}
        </div>
    </div>
    )
};

export default Results;